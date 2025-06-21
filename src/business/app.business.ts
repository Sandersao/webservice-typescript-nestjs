import { Injectable } from '@nestjs/common';

@Injectable()
export class AppBusiness {
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}