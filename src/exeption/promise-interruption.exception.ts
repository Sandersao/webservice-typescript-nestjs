export class PromiseInterruptionException extends Error {
    constructor(message: string, public code?: number, options?: ErrorOptions) {
        super(message, options)
        this.code = 200
    }
}