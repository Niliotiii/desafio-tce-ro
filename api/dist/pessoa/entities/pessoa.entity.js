"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const typeorm_1 = require("typeorm");
const endereco_entity_1 = require("../../endereco/entities/endereco.entity");
const cpf_tranformer_1 = require("../../validators/cpf.tranformer");
let Pessoa = class Pessoa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Pessoa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pessoa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pessoa.prototype, "pai", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pessoa.prototype, "mae", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Pessoa.prototype, "data_nasc", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, transformer: new cpf_tranformer_1.CpfTransformer() }),
    __metadata("design:type", String)
], Pessoa.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pessoa.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => endereco_entity_1.Endereco, (endereco) => endereco.pessoas),
    (0, typeorm_1.JoinColumn)({ name: 'endereco_fk', referencedColumnName: 'id' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Pessoa.prototype, "endereco", void 0);
Pessoa = __decorate([
    (0, typeorm_1.Entity)('pessoa')
], Pessoa);
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.entity.js.map