import { DataSource } from 'typeorm';
import { Pessoa } from './entities/pessoa.entity';
export declare const pessoaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Pessoa>;
    inject: string[];
}[];
