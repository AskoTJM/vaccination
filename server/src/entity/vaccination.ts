import {Entity, Column, PrimaryColumn} from "typeorm";
import { genderTypes, IOrder} from "../interfaces/interfaces";


@Entity()
export class Vaccine {
    
    @PrimaryColumn()
    vaccinationId!: string;

    @Column()
    gender!: genderTypes;

    @Column()
    sourceBottle!: IOrder;

    @Column()
        injected: string | undefined;

}