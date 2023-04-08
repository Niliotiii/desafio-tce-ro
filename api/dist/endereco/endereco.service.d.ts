import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
export declare class EnderecoService {
    private repository;
    constructor(repository: Repository<Endereco>);
    createOrUpdate(data: any, id?: string): Promise<Endereco> | null;
    private isValid;
    private checkPropriety;
    findOne(id: string): Promise<Endereco>;
    remove(id: string): Promise<Endereco>;
}
