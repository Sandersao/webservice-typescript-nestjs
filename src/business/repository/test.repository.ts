import { Repository } from 'typeorm'
import { Test } from './model/test'
import { dataSource } from 'src/service/database.service'

export class TestRepository {
    private model: Repository<Test>

    constructor() {
        this.model = dataSource.getRepository(Test)
    }

    public async select() {
        return this.model.find()
    }

    public async insert(text: string, int: number, bool: boolean) {
        const test = new Test()
        test.testString = text
        test.testNumber = int
        test.testBoolean = bool
        return this.model.save(test)
    }

    public async update(id: number, text: string, int: number, bool: boolean) {
        return this.model.findOneBy({ id: id })
            .then((test: Test) => {
                test.testString = text
                test.testNumber = int
                test.testBoolean = bool
                return test
            })
            .then((test: Test) => {
                return this.model.save(test)
            })
    }

    public async delete(id: number) {
        return this.model.findOneBy({ id: id })
            .then((test: Test) => {
                return this.model.remove(test)
            })
    }
}