import { Pessoa } from "src/pessoa/entities/pessoa.entity";
export declare class Endereco {
    id: string;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    pessoas: Pessoa[];
}
