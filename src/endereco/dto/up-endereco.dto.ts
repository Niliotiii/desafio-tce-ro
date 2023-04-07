import { PartialType } from '@nestjs/mapped-types';
import { EnderecoDto } from './endereco.dto';

export class UpdateEnderecoDto extends PartialType(EnderecoDto) {}
