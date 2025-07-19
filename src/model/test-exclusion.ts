import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "./test";

export class TestExclusion {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 'CURRENT_TIMESTAMP'})
    date: Date

    @ManyToOne(() => Test)
    @Column({name: 'test_id'})
    testId
}