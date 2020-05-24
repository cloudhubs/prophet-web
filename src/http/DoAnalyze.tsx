import ActionsRegister from "../state/ActionsRegister";
import * as React from "react";
import FetchMetadata from "./FetchMetadata";

const DoAnalyze = {
    async get(path: string) {
        ActionsRegister.startLoading();
        ActionsRegister.hideGitError();
        let split: string[] = path.split("/");
        const git = await FetchMetadata.getRepositoryDetail(split[0], split[1]);
        if (git == null) {
            ActionsRegister.stopLoading();
            ActionsRegister.showGitError();
            return;
        }
        const response = await fetch( 'http://127.0.0.1:8081/', {
        // const response = await fetch( 'https://cloudhubs.ecs.baylor.edu/prophet/utils', {
            method: 'POST',
            body: JSON.stringify({
                repositories: [
                    {
                        path: path,
                        isMonolith: true
                    }
                ],
                systemName: "tms"
            }),
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        });

        if (response != null){
            const body = await response.json();
            ActionsRegister.setProphetResponse(body.global, body.ms);
            setTimeout(() => {}, 3000);
            ActionsRegister.stopLoading();
            return body;
        } else {
            console.log("server error");
            ActionsRegister.stopLoading();
            return [];
        }

    },
}

export default DoAnalyze;
