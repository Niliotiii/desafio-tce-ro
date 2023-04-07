import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EnderecoProprietyCreateDto } from "./dto/create-endereco.dto";
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  // constructor(private readonly enderecoService: EnderecoService) {
  // }

  // @Post()
  // create(@Body() data: EnderecoProprietyCreateDto) {
  //   return this.enderecoService.createOrUpdate(data);
  // }
  }