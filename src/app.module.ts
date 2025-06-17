import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAdapter } from './business/adapter/config.adapter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigAdapter],
  exports: [ConfigAdapter]
})
export class AppModule {}
