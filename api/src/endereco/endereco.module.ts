import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { DatabaseModule } from 'src/database/database.module';
import { enderecoProviders } from './enderecoProviders';
import { EnderecoController } from './endereco.controller';

@Module({
  imports: [DatabaseModule],
  // controllers:[EnderecoController],
  providers: [
    ...enderecoProviders,
    EnderecoService,
  ],
  exports: [EnderecoService],
})
export class EnderecoModule {}
