import { FindOptionsWhere, In, Like, Repository, MoreThanOrEqual, LessThanOrEqual, Between, FindOperator } from 'typeorm'
import { Test } from '../../model/test'
import { Injectable } from '@nestjs/common'
import { makeConfigSystem } from 'src/system/config.system'
import { TestListRequest } from 'src/request/test-list.request'
import { TestInsertRequest } from 'src/request/test-insert.request'
import { TestUpdateRequest } from 'src/request/test-update.request'
import { TestDeleteRequest } from 'src/request/test-delete.request'
import { TestSelectOneRequest } from 'src/request/test-select-one.request copy'
import { makeTextTransformSystem } from 'src/system/text-transform.sysem'
import { TestExclusion } from 'src/model/test-exclusion'

@Injectable()
export class TestRepository {
    private readonly model: Repository<Test> = makeConfigSystem()
        .getDataSource()
        .getRepository(Test)

    private readonly modelExclusao: Repository<TestExclusion> = makeConfigSystem()
        .getDataSource()
        .getRepository(TestExclusion)

    public async select(request: TestListRequest): Promise<Test[]> {
        const whereConditionList: FindOptionsWhere<Test> | FindOptionsWhere<Test>[] = {}
        if (request.id) {
            whereConditionList.id = In(request.id)
        }
        if (request.testString) {
            whereConditionList.testString = Like(`%${makeTextTransformSystem().toUpper(request.testString)}%`) as any
        }
        if (request.testNumber) {
            whereConditionList.testNumber = request.testNumberMax
        }
        if (request.testNumberMax && !request.testNumberMin) {
            whereConditionList.testNumber = LessThanOrEqual(request.testNumberMax)
        }
        if (!request.testNumberMax && request.testNumberMin) {
            whereConditionList.testNumber = MoreThanOrEqual(request.testNumberMin)
        }
        if (!request.testNumberMax && request.testNumberMin) {
            whereConditionList.testNumber = Between(request.testNumberMin, request.testNumberMax) as FindOperator<number>
        }
        return this.model.findBy(whereConditionList)
    }

    public async selectOne(request: TestSelectOneRequest): Promise<Test | null> {
        return this.model.findOneBy(request)
    }

    public async insert(request: TestInsertRequest): Promise<Test> {
        const test = new Test()
        test.testString = makeTextTransformSystem().toUpper(request.testString)!
        test.testNumber = request.testNumber
        test.testBoolean = request.testBoolean
        return this.model.save(test)
    }

    public async update(request: TestUpdateRequest): Promise<Test> {
        return this.model.findOneBy({ id: request.id })
            .then((test: Test) => {
                if (request.testString) {
                    test.testString = makeTextTransformSystem().toUpper(request.testString)!
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

    public async delete(request: TestDeleteRequest): Promise<TestExclusion> {
        const excusao = new TestExclusion()
        excusao.testId = request.id!
        return this.modelExclusao.save(excusao)
    }
}