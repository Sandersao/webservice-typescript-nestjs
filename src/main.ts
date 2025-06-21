import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { makeConfigService } from './service/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = makeConfigService()
    config.getApplication(app)
    config.bootstrap()
}

bootstrap()