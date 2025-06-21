import { PaginationResponseSystem } from "./pagination-response.system";

export class BodyResponseSystem<T = any[]> {
    constructor(
        public message: string,
        public data: T,
        public code?: number,
        public pagination?: PaginationResponseSystem
    ) { }
}