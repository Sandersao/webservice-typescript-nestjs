import { Injectable } from "@nestjs/common";
import { TestRepository } from "./repository/test.repository";
import { TestListResponse } from "src/controller/response/test-list.response";

@Injectable()
export class TestBusiness {
    constructor(
        private readonly repository: TestRepository
    ) { }

    public async getSelect(): Promise<TestListResponse[]>{
        return this.repository.select()
    }
}