import { ApiProperty } from "@nestjs/swagger"
import { Transform, Type } from "class-transformer"
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class TestListRequest {
    @ApiProperty({ required: false, type: [Number]})
    @IsOptional()
    @Transform(({ value }) => {
        if(Array.isArray(value)){
            return value
        }
        if (typeof value == "object") {
            return Array.from(value)
        }

        if (typeof value != 'number') {
            return [parseInt(value)]
        }

        return [value]
    })
    @Type(() => Array<number>)
    @IsArray()
    public id?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    public testString?: string

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    public testNumber?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Boolean)
    // @Transform(({ value }) => {
    //     if (typeof value == 'boolean') {
    //         return value
    //     }
    //     if (value === 'true') {
    //         return true
    //     }
    //     return false
    // })
    @IsBoolean()
    public testBoolean?: boolean
}