import {Global} from "./Global";
import {Ms} from "./Ms";

export interface ProphetAppData {
    "global": Global,
    "ms": Ms[],
    "isMonolith": boolean
}