import { Repository } from 'typeorm'
import { Test } from './model/test'
import { Injectable } from '@nestjs/common'
import { makeConfigSystem } from 'src/system/config.system'
import { TestListRequest } from 'src/controller/request/test-list.request'
import { TestInsertRequest } from 'src/controller/request/test-insert.request'
import { TestUpdateRequest } from 'src/controller/request/test-update.request'
import { TestDeleteRequest } from 'src/controller/request/test-delete.request'

@Injectable()
export class TestRepository {
    private readonly model: Repository<Test> = makeConfigSystem()
        .getDataSource()
        .getRepository(Test)

    public async select(request: TestListRequest): Promise<Test[]> {
        return this.model.findBy(request)
    }

    public async insert(request: TestInsertRequest): Promise<Test> {
        const test = new Test()
        test.testString = request.testString
        test.testNumber = request.testNumber
        test.testBoolean = request.testBoolean
        return this.model.save(test)
    }

    public async update(request: TestUpdateRequest): Promise<Test> {
        return this.model.findOneBy({ id: request.id })
            .then((test: Test) => {
                if (request.testString) {
                    test.testString = request.testString
                }
                if (request.testNumber) {
                    test.testNumber = request.testNumber
                }
                if (request.testBoolean) {
                    test.testBoolean = request.testBoolean
                }
                return test
            })
            .then((test: Test) => {
                return this.model.save(test)
            })
    }

    public async delete(request: TestDeleteRequest): Promise<Test> {
        return this.model.findOneBy({ id: request.id })
            .then((test: Test) => {
                return this.model.remove(test)
            })
    }
}