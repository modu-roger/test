import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "./common.entity";

@Entity()
export class Board extends Common{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    content: string;
}