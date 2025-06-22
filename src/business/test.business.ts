import { Injectable } from "@nestjs/common";
import { TestRepository } from "./repository/test.repository";
import { TestListRequest } from "src/controller/request/test-list.request";
import { TestInsertRequest } from "src/controller/request/test-insert.request";
import { TestUpdateRequest } from "src/controller/request/test-update.request";
import { TestDeleteRequest } from "src/controller/request/test-delete.request";

@Injectable()
export class TestBusiness {
    constructor(
        private readonly repository: TestRepository
    ) { }

    public async select(request: TestListRequest) {
        return this.repository.select(request)

        /** @todo Trow this exception as a all right error */
        /** It must be throun when there is no itens on the item */
        // 'No test recovered for the filters informed'
    }

    public async insert(request: TestInsertRequest) {
        return this.repository.insert(request)
    }

    public async update(request: TestUpdateRequest) {
        return this.repository.update(request)
    }

    public async delete(request: TestDeleteRequest) {
        return this.repository.delete(request)
    }
}