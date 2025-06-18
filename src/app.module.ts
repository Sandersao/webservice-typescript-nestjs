import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppBusiness } from './business/app.business';
import { ConfigAdapter } from './business/adapter/config.adapter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppBusiness, ConfigAdapter],
  exports: [ConfigAdapter]
})
export class AppModule {}
