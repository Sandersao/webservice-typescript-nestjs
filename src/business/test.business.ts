import { Injectable } from "@nestjs/common";
import { TestRepository } from "./repository/test.repository";

@Injectable()
export class TestBusiness {
    constructor(
        private readonly repository: TestRepository
    ) { }

    public async getSelect(){
        return this.repository.select()
    }
}