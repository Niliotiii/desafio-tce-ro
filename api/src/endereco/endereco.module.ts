import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { DatabaseModule } from 'src/database/database.module';
import { enderecoProviders } from './enderecoProviders';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...enderecoProviders,
    EnderecoService,
  ],
  exports: [EnderecoService],
})
export class EnderecoModule {}
