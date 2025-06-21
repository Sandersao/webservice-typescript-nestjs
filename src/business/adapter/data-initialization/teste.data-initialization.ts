import { Test } from "src/business/repository/model/test"
import { PromiseInterruptionException } from "src/exeption/promise-interruption.exception"
import { makeConfigSystem } from "src/system/config.system"
import { DataSource, InsertResult, Repository } from "typeorm"

export class TestDataInitialization {
    public start(dataSource: DataSource) {
        const test = new Test()

        test.testString = 'Test'
        test.testNumber = 1
        test.testBoolean = true

        const repository: Repository<Test> = dataSource.getRepository(Test)

        repository.findOneBy(test)
            .then((testFetched: Test | null) => {
                if (testFetched) {
                    throw new PromiseInterruptionException('Interrupção da promise pois o registro de testes já está persistido')
                }
                return testFetched
            })
            .then(() => {
                return repository.insert(test)
            })
            .then(async (insertResult: InsertResult) => {
                for (const i in insertResult.generatedMaps) {
                    const map = insertResult.generatedMaps[i] as Test
                    const inserted = await repository.findOneBy(map)
                    console.log(inserted)
                }
            })
            .catch((err: PromiseInterruptionException) => {
                if (makeConfigSystem().productionMode) {
                    console.debug(err)
                }
            })
    }
}