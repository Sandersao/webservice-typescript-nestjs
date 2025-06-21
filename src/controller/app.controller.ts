import { Controller, Get } from '@nestjs/common';
import { AppBusiness } from '../business/app.business';
import { BodyResponse } from './response/system/body.response';

@Controller()
export class AppController {
  constructor(private readonly business: AppBusiness) { }

  @Get()
  async getHello(): Promise<BodyResponse<string>> {
    const helloWorldMessage = await this.business.getHello();
    return {
      message: "Hello world successfully fetched",
      data: helloWorldMessage
    } as BodyResponse<string>
  }
}
