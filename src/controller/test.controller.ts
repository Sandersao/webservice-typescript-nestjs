import { Controller, Get } from "@nestjs/common";
import { TestBusiness } from "src/business/test.business";
import { BodyResponse } from "./response/system/body.response";
import { TestResponse } from "./response/teste.response";

@Controller('test')
export class TestController {
    constructor(
        private readonly business: TestBusiness
    ) { }

    @Get()
    public async getSelect() {
        const testList = await this.business.getSelect()
        return {
            message: 'Test list succesfully recoverred',
            data: testList
        } as BodyResponse<TestResponse[]>
    }
}