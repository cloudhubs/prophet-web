const DoAnalyze = {
    async get(path: string) {
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
            console.log(body);
            return body;
        } else {
            console.log("server error");
            return [];
        }
    },
}

export default DoAnalyze;
