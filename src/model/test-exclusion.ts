import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "./test";

@Entity('tb_test_exclusion')
export class TestExclusion {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 'CURRENT_TIMESTAMP'})
    date: Date

    @JoinColumn({name: 'test_id'})
    @ManyToOne(() => Test)
    testId: number
}