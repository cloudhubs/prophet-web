export class ReqConfigSingle {
    isMonolith: boolean;
    organization: string;
    repository: string;
    index: number;
    constructor(index: number){
        this.index = index;
        this.organization = "";
        this.repository = "";
        this.isMonolith = false;
    }
}
