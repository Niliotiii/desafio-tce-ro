import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import { Endereco } from "../../endereco/entities/endereco.entity";
import { CpfTransformer } from '../../validators/cpf.tranformer';

@Entity('pessoa')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  pai: string;

  @Column()
  mae: string;

  @Column({ type: 'date' })
  data_nasc: Date;

  @Column({ unique: true, transformer: new CpfTransformer() })
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @ManyToOne( ()=> Endereco, (endereco)=>endereco.pessoas)
  @JoinColumn({name:'endereco_fk', referencedColumnName:'id'})
  endereco?:Endereco;
}
