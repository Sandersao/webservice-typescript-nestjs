import { Injectable } from "@nestjs/common";
import { TestRepository } from "./repository/test.repository";
import { TestListResponse } from "src/controller/response/test-list.response";
import { TestListRequest } from "src/controller/request/test-list.request";

@Injectable()
export class TestBusiness {
    constructor(
        private readonly repository: TestRepository
    ) { }

    public async getSelect(request: TestListRequest): Promise<TestListResponse[]>{
        return this.repository.select(request)
    }
}