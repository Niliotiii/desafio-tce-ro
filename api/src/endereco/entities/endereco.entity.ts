import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("endereco")
export class Endereco {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToMany(() => Pessoa, pessoa=>pessoa.endereco)
  pessoas:Pessoa[]
}
