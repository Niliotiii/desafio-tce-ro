import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { DatabaseModule } from 'src/database/database.module';
import { pessoaProviders } from './pessoaProviders';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { PessoaController } from './pessoa.controller';

@Module({
  imports: [DatabaseModule, EnderecoModule],
  controllers: [PessoaController],
  providers: [
    ...pessoaProviders,
    PessoaService,
  ],
})
export class PessoaModule {}
