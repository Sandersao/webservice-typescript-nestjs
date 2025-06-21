import { Controller, Get } from '@nestjs/common';
import { AppBusiness } from '../business/app.business';
import { BodyResponseSystem } from '../system/body-response.system';

@Controller()
export class AppController {
  constructor(private readonly business: AppBusiness) { }

  @Get()
  async getHello(): Promise<BodyResponseSystem<string>> {
    const helloWorldMessage = await this.business.getHello();
    return {
      message: "Hello world successfully fetched",
      data: helloWorldMessage
    } as BodyResponseSystem<string>
  }
}
