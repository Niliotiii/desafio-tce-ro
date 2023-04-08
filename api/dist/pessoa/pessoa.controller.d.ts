import { PessoaService } from "./pessoa.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
export declare class PessoaController {
    private readonly pessoaService;
    constructor(pessoaService: PessoaService);
    create(data: CreatePessoaDto): Promise<import("./entities/pessoa.entity").Pessoa>;
    findAll(): Promise<import("./entities/pessoa.entity").Pessoa[]>;
    findOne(id: string): Promise<import("./entities/pessoa.entity").Pessoa>;
    update(id: string, data: UpdatePessoaDto): Promise<import("./entities/pessoa.entity").Pessoa>;
    remove(id: string): Promise<import("./entities/pessoa.entity").Pessoa>;
}
