import { Injectable } from "@nestjs/common";
import { TestRepository } from "./repository/test.repository";
import { TestResponse } from "src/controller/response/teste.response";

@Injectable()
export class TestBusiness {
    constructor(
        private readonly repository: TestRepository
    ) { }

    public async getSelect(): Promise<TestResponse[]>{
        return this.repository.select()
    }
}