import { Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { TestBusiness } from "src/business/test.business";
import { BodyResponseSystem } from "../system/body-response.system";
import { TestListResponse } from "./response/test-list.response";
import { TestListRequest } from "./request/test-list.request";

@Controller('test')
export class TestController {
    constructor(
        private readonly business: TestBusiness
    ) { }

    @Get()
    public async getSelect(@Query(new ValidationPipe()) request: TestListRequest) {
        const testList = await this.business.getSelect(request)
        return {
            message: testList.length > 0 ? 'Test list succesfully recoverred' : 'No test recovered for the filters informed',
            data: testList
        } as BodyResponseSystem<TestListResponse[]>
    }
}