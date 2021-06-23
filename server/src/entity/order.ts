import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Order {
  
    @PrimaryColumn()
    id!: string;

    @Column()
    healthCareDistrict!: string;

    @Column()
    orderNumber!: number;

    @Column()
    responsiblePerson!: string;

    @Column()
    injections!: number;

    @Column()
    arrived!: string;

    @Column()
    vaccine!: string;

}

