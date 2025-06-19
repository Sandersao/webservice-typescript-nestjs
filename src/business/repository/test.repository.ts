import { Repository } from 'typeorm'
import { Test } from './model/test'
import { ConfigAdapter } from '../adapter/config.adapter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TestRepository {
    private model: Repository<Test>

    constructor(private readonly configAdapter: ConfigAdapter) {
        this.model = this.configAdapter
            .getDataSource()
            .getRepository(Test)
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