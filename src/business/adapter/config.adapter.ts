import { INestApplication, Injectable } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { config } from "dotenv";
config()

@Injectable()
export class ConfigAdapter {
    public environment: string = process.env.ENVIRONMENT! ?? 'PRODUCTION'
    public port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000
    public title: string = process.env.TITLE ?? 'Product menegment'
    public description: string = process.env.DISCRIPTION ?? 'This api helps on meneging products, note, does not menege the inventory'
    public tagList: Array<string> = ['product', `price`]

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
                if (this.environment == 'DEVELOP') {
                    console.debug(`Application ruinning on door ${this.port}`)
                }
            }
        )
    }

}