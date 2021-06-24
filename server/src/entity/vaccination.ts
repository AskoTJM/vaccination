import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Vaccination {
    
    @PrimaryColumn()
    "vaccination-id"!: string;

    @Column()
    gender!: string;

    @Column()
    sourceBottle!: string;

    @Column({ type: 'timestamptz' })
    vaccinationDate!: Date;

}