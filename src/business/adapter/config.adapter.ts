import { INestApplication, Injectable } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { modelList } from "../repository/model/_model-list";
config()

type Enviroment = 'PRODUCTION' | 'HOMOLOGATION' | 'DEVELOPMENT'

@Injectable()
export class ConfigAdapter {
    public environment: Enviroment = (process.env.ENVIRONMENT! ?? 'PRODUCTION') as Enviroment
    public productionMode: boolean = this.environment == 'PRODUCTION'
    public port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000
    public title: string = process.env.TITLE ?? 'Product menegment'
    public description: string = process.env.DISCRIPTION ?? 'This api helps on meneging products, note, does not menege the inventory'
    public tagList: Array<string> = ['product', `price`]

    public databasePath: string = process.env.DATABASE_PATH ?? `${__dirname}/../database/database.sqlite`

    private dataSource: DataSource

    public swagger(app: INestApplication<any>) {
        const swaggerConfigrer = new DocumentBuilder()
            .setTitle(this.title)
            .setDescription(this.description)

        for (const i in this.tagList) {
            const tag = this.tagList[i];
            swaggerConfigrer.addTag(tag)
        }


        const swaggerConfig = swaggerConfigrer.build()
        SwaggerModule.setup('api', app, () => SwaggerModule.createDocument(app, swaggerConfig))
    }

    public async provedorHttp(app: INestApplication<any>) {
        return await app.listen(
            this.port,
            () => {
                if (!this.productionMode) {
                    console.debug(`Application ruinning on door ${this.port}`)
                }
            }
        )
    }

    public getDataSource() {
        if (!this.dataSource) {
            let databseOption: DataSourceOptions = {
                type: 'sqlite',
                database: this.databasePath,
                entities: [...modelList],
                synchronize: !this.productionMode,
                logging: !this.productionMode
            }
            this.dataSource = new DataSource(databseOption)
        }
        return this.dataSource
    }

    public databaseBootstrap(dataConfigCallback: (dataSource: DataSource) => void = (ret: DataSource) => {}) {
        return this.getDataSource()
            .initialize()
            .then((dataSource: DataSource) => {
                if(!this.productionMode){
                    console.debug(dataSource.options);
                }
                dataConfigCallback(dataSource)
            })
            .catch((error) => console.error(error))
    }
}