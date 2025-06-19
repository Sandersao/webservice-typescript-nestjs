import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppBusiness } from './business/app.business';
import { ConfigAdapter } from './business/adapter/config.adapter';
import { TestController } from './controller/test.controller';
import { TestBusiness } from './business/test.business';
import { TestRepository } from './business/repository/test.repository';

@Module({
  imports: [],
  controllers: [
    AppController,
    TestController
  ],
  providers: [
    ConfigAdapter,
    AppBusiness,
    TestBusiness,
    TestRepository
  ],
  exports: [ConfigAdapter]
})
export class AppModule {}
