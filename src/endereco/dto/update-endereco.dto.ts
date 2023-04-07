import { IsNotEmpty, ValidateNested } from "class-validator";
import { UpdateEnderecoDto } from "./up-endereco.dto";
import { Type } from 'class-transformer';

export class EnderecoProprietyUpdateDto {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => UpdateEnderecoDto)
    endereco: UpdateEnderecoDto;
}