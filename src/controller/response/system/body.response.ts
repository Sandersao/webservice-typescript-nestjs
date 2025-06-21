import { PaginationResponse } from "./pagination.response";

export class BodyResponse<T = any[]> {
    constructor(
        public message: string,
        public data: T,
        public code?: number,
        public pagination?: PaginationResponse
    ) { }
}