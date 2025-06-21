import { INestApplication } from "@nestjs/common";
import { TestDataInitialization } from "./teste.data-initialization";
import { DataSource } from "typeorm";

export const dataInitialization = async (app: INestApplication<any>, dataSource: DataSource) =>{
    const teste: TestDataInitialization = app.get(TestDataInitialization)
    teste.start(dataSource)
}