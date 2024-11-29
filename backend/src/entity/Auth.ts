import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Auth {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    cep: string;

    @Column('varchar')
    cpf: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column('double precision')
    gender: string;

}