import { DataSource } from "typeorm";

export let dataSource: DataSource

export const setDataSource = (inputDataSource: DataSource) => {
    dataSource = inputDataSource
}