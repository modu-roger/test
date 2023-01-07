import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {Common} from "./common.entity";

@Entity()
export class User extends Common{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
