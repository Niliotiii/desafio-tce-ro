"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enderecoProviders = void 0;
const endereco_entity_1 = require("./entities/endereco.entity");
exports.enderecoProviders = [
    {
        provide: 'ENDERECO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(endereco_entity_1.Endereco),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=enderecoProviders.js.map