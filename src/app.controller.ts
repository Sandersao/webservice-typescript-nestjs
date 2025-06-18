import { Controller, Get } from '@nestjs/common';
import { AppBusiness } from './app.business';

@Controller()
export class AppController {
  constructor(private readonly business: AppBusiness) {}

  @Get()
  getHello(): string {
    return this.business.getHello();
  }
}
