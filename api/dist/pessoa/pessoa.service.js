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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const endereco_service_1 = require("../endereco/endereco.service");
let PessoaService = class PessoaService {
    constructor(repository, enderecoService) {
        this.repository = repository;
        this.enderecoService = enderecoService;
    }
    async create(data) {
        const endereco = await this.enderecoService.createOrUpdate(data);
        delete data.endereco;
        return this.repository.save(Object.assign(Object.assign({}, data), { endereco: endereco }));
    }
    findAll() {
        return this.repository.find({
            relations: ['endereco'],
        });
    }
    async findOne(id) {
        const entity = await this.repository.findOne({
            where: { id },
            relations: [
                "endereco"
            ]
        });
        if (!entity) {
            throw new common_1.NotFoundException(`Pessoa not found`);
        }
        return entity;
    }
    async update(id, data) {
        let _a = await this.findOne(id), { endereco } = _a, pessoa = __rest(_a, ["endereco"]);
        const entity = await this.repository.preload(Object.assign({ id: pessoa.id }, data));
        if (data.endereco !== undefined && data.endereco !== null)
            entity.endereco = await this.enderecoService.createOrUpdate(data, endereco.id);
        return this.repository.save(entity);
    }
    async remove(id) {
        return this.repository.remove(await this.findOne(id));
    }
};
PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PESSOA_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        endereco_service_1.EnderecoService])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map