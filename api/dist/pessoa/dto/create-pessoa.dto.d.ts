import { EnderecoDto } from "src/endereco/dto/endereco.dto";
export declare class CreatePessoaDto {
    nome: string;
    pai: string;
    mae: string;
    cpf: string;
    data_nasc: Date;
    email: string;
    telefone: string;
    endereco: EnderecoDto;
}
