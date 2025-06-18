import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigAdapter } from './business/adapter/config.adapter';
import { dataSource, setDataSource } from './service/database.service';
import { DataSource, InsertResult } from 'typeorm';
import { Test } from './business/repository/model/test';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = app.get(ConfigAdapter)

    config.swagger(app)

    config.provedorHttp(app)

    setDataSource(config.dataSource())

    config.dataBootstrap(dataSource, (dataSource: DataSource) => {
        const test = new Test()

        test.testString = 'Test'
        test.testNumber = 1
        test.testBoolean = true

        dataSource.getRepository(Test).findOneBy(test)
            .then((testFetched: Test) => {
                if (!testFetched) {
                    dataSource.getRepository(Test).insert(test)
                        .then((result: InsertResult) => {
                            for (const i in result.generatedMaps) {
                                const map = result.generatedMaps[i]
                                dataSource.getRepository(Test)
                                    .findOneBy(map)
                                    .then(test => console.log(test))
                            }
                        })
                }
            })

    })
}

bootstrap()