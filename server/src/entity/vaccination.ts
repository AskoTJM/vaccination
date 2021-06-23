import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Vaccination {
    
    @PrimaryColumn()
    vaccinationId!: string;

    @Column()
    gender!: string;

    @Column()
    sourceBottle!: string;

    @Column()
    injected!: string;

}