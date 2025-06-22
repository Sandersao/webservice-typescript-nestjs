import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class TestUpdateRequest {
    @ApiProperty({ required: false, type: Number})
    @Type(() => Number)
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
    @IsBoolean()
    public testBoolean?: boolean
}