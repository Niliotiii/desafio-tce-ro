import { EnderecoDto } from "src/endereco/dto/endereco.dto";
import { IsNotEmpty, IsString, ValidateNested, MinLength, MaxLength, IsOptional, IsDate } from 'class-validator';
import { Type } from "class-transformer";
import { IsCPF } from 'src/validators/cpf-cnpj.validator';

export class CreatePessoaDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  nome: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  pai: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(100)
  @IsString()
  mae: string;

  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(14)
  @IsCPF()
  cpf: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco!: EnderecoDto;

  @IsNotEmpty()
  @IsDate()
  dataNasc: Date;
}