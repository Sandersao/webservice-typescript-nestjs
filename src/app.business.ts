import { Injectable } from '@nestjs/common';

@Injectable()
export class AppBusiness {
  getHello(): string {
    return 'Hello World!';
  }
}
