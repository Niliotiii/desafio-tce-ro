import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { Pessoa } from "./entities/pessoa.entity";
import { Repository } from "typeorm";
import { EnderecoService } from "../endereco/endereco.service";
export declare class PessoaService {
    private repository;
    private readonly enderecoService;
    constructor(repository: Repository<Pessoa>, enderecoService: EnderecoService);
    create(data: CreatePessoaDto): Promise<Pessoa>;
    findAll(): Promise<Pessoa[]>;
    findOne(id: string): Promise<Pessoa>;
    update(id: string, data: UpdatePessoaDto): Promise<Pessoa>;
    remove(id: string): Promise<Pessoa>;
}
