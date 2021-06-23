import {Entity, Column, PrimaryColumn} from "typeorm";
import {IPerson, vaccineNames } from "../interfaces/interfaces";

@Entity()
export class Order {
  
    @PrimaryColumn()
    id!: string;

    @Column()
    healthCareDistrict!: string;

    @Column()
    orderNumber!: number;

    @Column()
    responsiblePerson!: IPerson;

    @Column()
    injections!: number;

    @Column()
    arrived!: string;

    @Column()
    vaccine!: vaccineNames;

}

