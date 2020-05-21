import {Global} from "../model/Global";
import {Ms} from "../model/Ms";
import {Request} from "../model/Request";

export type State = {
    githubUrl: string;
    global: Global;
    ms: Ms[];
    request: Request;
    loading: boolean;
}
