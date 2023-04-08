import { CreatePessoaDto } from "./create-pessoa.dto";
import { EnderecoDto } from "src/endereco/dto/endereco.dto";
declare const UpdatePessoaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePessoaDto>>;
export declare class UpdatePessoaDto extends UpdatePessoaDto_base {
    endereco: EnderecoDto;
}
export {};
