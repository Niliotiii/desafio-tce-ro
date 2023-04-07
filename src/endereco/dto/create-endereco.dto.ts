import { Type } from 'class-transformer';
import { EnderecoDto } from './endereco.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class EnderecoProprietyCreateDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;
}
