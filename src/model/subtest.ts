import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "./test";

@Entity('tb_subtest')
export class Subtest {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string

    @JoinColumn({ name: 'test_id' })
    @ManyToOne(() => Test)
    testId: number
}