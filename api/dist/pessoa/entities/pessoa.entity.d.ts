import { Endereco } from "../../endereco/entities/endereco.entity";
export declare class Pessoa {
    id: string;
    nome: string;
    pai: string;
    mae: string;
    data_nasc: Date;
    cpf: string;
    email: string;
    telefone: string;
    endereco?: Endereco;
}
