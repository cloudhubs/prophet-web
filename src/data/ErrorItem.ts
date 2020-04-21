export class ErrorItem {
    constructor(error){this.error = error}
    initialized: boolean = false;
    active: boolean = false;
    error: string;
}
