import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigAdapter } from './business/adapter/config.adapter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = app.get(ConfigAdapter)

    config.swagger(app)

    config.provedorHttp(app)
}

bootstrap()