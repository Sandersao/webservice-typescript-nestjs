import { Injectable } from "@nestjs/common";
import { config } from "dotenv";
config()

@Injectable()
export class ConfigAdapter {
    getGlobal(){
        return {
            env: process.env.ENVIRONMENT ?? 'PRODUCTION'
        } as {env: string}
    }

    getApplication(){
        return {
            port: process.env.PORT ?? 3000
        } as {port: number}
    }
}