import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigAdapter } from './business/adapter/config.adapter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const configAdapter: ConfigAdapter = new ConfigAdapter()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Product menegment')
    .setDescription('This api helps on meneging products, note, does not menege the inventory')
    .addTag('product')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(configAdapter.getApplication().port, () => {
    if (configAdapter.getGlobal().env == 'DEVELOP') {
      console.debug(`Application ruinning on door ${configAdapter.getApplication().port}`)
    }
  })
}

bootstrap()