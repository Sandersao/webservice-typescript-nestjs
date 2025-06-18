import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppBusiness } from './app.business';
import { ConfigAdapter } from './business/adapter/config.adapter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppBusiness, ConfigAdapter],
  exports: [ConfigAdapter]
})
export class AppModule {}
