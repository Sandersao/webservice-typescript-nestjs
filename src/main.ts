import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { makeConfigSystem } from './system/config.system';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = makeConfigSystem()
    config.getApplication(app)
    config.bootstrap()
}

bootstrap()