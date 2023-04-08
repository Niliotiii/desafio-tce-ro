import { DataSource } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
export declare const enderecoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Endereco>;
    inject: string[];
}[];
