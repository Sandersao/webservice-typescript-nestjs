import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "./test";

@Entity('tb_subtest')
export class Subtest {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string

    @ManyToOne(() => Test)
    @Column({ name: 'test_id' })
    testId: number
}