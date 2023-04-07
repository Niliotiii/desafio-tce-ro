import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PessoaService } from "./pessoa.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";

@Controller("pessoa")
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {
  }

  @Post()
  create(@Body() data: CreatePessoaDto) {
    return this.pessoaService.create(data);
  }

  @Get()
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pessoaService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() data: UpdatePessoaDto) {
    return this.pessoaService.update(id, data);
  }

  @Delete(":id")
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(id);
  }
}
