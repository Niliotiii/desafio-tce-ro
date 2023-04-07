import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { Pessoa } from "./entities/pessoa.entity";
import { Repository } from "typeorm";
import { EnderecoService } from "../endereco/endereco.service";

@Injectable()
export class PessoaService {

  constructor(
    @Inject("PESSOA_REPOSITORY")
    private repository: Repository<Pessoa>,
    private readonly enderecoService: EnderecoService
  ) {
  }

  async create(data: CreatePessoaDto): Promise<Pessoa> {
    const endereco = await this.enderecoService.createOrUpdate(data);
    delete data.endereco;
    return this.repository.save({
      ...data,
      endereco:endereco
    })
  }

  findAll(): Promise<Pessoa[]> {
    return this.repository.find({
      relations: ['endereco'],
    });
  }


  async findOne(id: string): Promise<Pessoa> {
    const entity = await this.repository.findOne({
      where: { id },
      relations: [
        "endereco"
      ]
    });

    if (!entity) {
      throw new NotFoundException(`Pessoa not found`);
    }

    return entity;
  }

  async update(id: string, data: UpdatePessoaDto):Promise<Pessoa> {
    let { endereco, ...pessoa } = await this.findOne(id);

    const entity = await this.repository.preload({
      id: pessoa.id,
      ...data,
    });

    if (data.endereco !== undefined && data.endereco !== null)
      entity.endereco = await this.enderecoService.createOrUpdate(
        data,
        endereco.id,
      );

    return this.repository.save(entity);

  }

  async remove(id: string) {
    // const entity = await this.findOne(id);
    // this.enderecoService.remove(entity.endereco?.id);
    
    return this.repository.remove(await this.findOne(id));
  }
}
