"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaProviders = void 0;
const pessoa_entity_1 = require("./entities/pessoa.entity");
exports.pessoaProviders = [
    {
        provide: 'PESSOA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(pessoa_entity_1.Pessoa),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=pessoaProviders.js.map