import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000, () => {
    if ((process.env.ENVIRONMENT ?? 'PRODUCTION') == 'DEVELOP') {
      console.debug(`Application ruinning on door ${process.env.PORT}`)
    }
  })
}

config()
bootstrap()