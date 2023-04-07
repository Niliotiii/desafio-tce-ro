import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { PartialType } from "@nestjs/mapped-types";
import { CreatePessoaDto } from "./create-pessoa.dto";
import { Type } from "class-transformer";
import { EnderecoDto } from "src/endereco/dto/endereco.dto";

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco!: EnderecoDto;
}
