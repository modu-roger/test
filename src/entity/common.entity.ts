import {Column} from "typeorm";

export class Common{
    @Column()
    created_at: Date;

    @Column()
    modified_at; Date;
}