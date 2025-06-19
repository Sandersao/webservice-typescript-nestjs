import { Controller, Get } from "@nestjs/common";
import { TestBusiness } from "src/business/test.business";

@Controller('test')
export class TestController {
    constructor(
        private readonly business: TestBusiness
    ) { }

    @Get()
    public async getSelect() {
        return this.business.getSelect()
    }
}