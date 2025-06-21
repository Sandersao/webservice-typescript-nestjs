import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppBusiness } from './business/app.business';
import { TestController } from './controller/test.controller';
import { TestBusiness } from './business/test.business';
import { TestRepository } from './business/repository/test.repository';
import { TestDataInitialization } from './business/adapter/data-initialization/teste.data-initialization';

@Module({
  imports: [],
  controllers: [
    AppController,
    TestController
  ],
  providers: [
    AppBusiness,
    TestBusiness,
    TestRepository,
    TestDataInitialization
  ]
})
export class AppModule {}
