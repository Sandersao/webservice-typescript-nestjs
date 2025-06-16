import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigAdapter } from './business/adapter/config.adapter';

const configAdapter: ConfigAdapter = new ConfigAdapter()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(configAdapter.getApplication().port, () => {
    if (configAdapter.getGlobal().env == 'DEVELOP') {
      console.debug(`Application ruinning on door ${configAdapter.getApplication().port}`)
    }
  })
}

bootstrap()