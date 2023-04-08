import { Pessoa } from "./entities/pessoa.entity";

describe('Pessoa Entity', () => {
  it('should have the "nome" property defined', () => {
    const pessoa = new Pessoa();
    pessoa.nome = 'John Doe';

    expect(pessoa.nome).toBeDefined();
    expect(pessoa.nome).toBe('John Doe');
  });
});