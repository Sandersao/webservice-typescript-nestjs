import { ApiProperty } from "@nestjs/swagger"
import { Transform, Type } from "class-transformer"
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"
import { transformToArray } from "src/system/data.system"

export class TestListRequest {
    @ApiProperty({ required: false, type: [Number] })
    @IsOptional()
    @Transform(({ value }) => {
        return transformToArray<number>(value)
    })
    @Type(() => Array<number>)
    @IsArray()
    public id: number[]

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    public testString?: string

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    public testNumber: number

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    public testNumberMin?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    public testNumberMax?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    public testBoolean?: boolean
}