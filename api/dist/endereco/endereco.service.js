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
exports.EnderecoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const endereco_dto_1 = require("./dto/endereco.dto");
let EnderecoService = class EnderecoService {
    constructor(repository) {
        this.repository = repository;
    }
    async createOrUpdate(data, id) {
        const _data = this.checkPropriety(data);
        if (_data === null)
            return null;
        let { novo } = _data, endereco = __rest(_data, ["novo"]);
        if (!novo && typeof id !== 'undefined' && id !== null)
            endereco = await this.repository.preload(Object.assign({ id: id }, endereco));
        endereco = await this.isValid(endereco);
        return await this.repository.save(endereco);
    }
    async isValid(data) {
        const entity = (0, class_transformer_1.plainToClass)(endereco_dto_1.EnderecoDto, data);
        const validator = new class_validator_1.Validator();
        const errors = await validator.validate(entity, {
            validationError: {
                target: false,
                value: false,
            },
        });
        if (errors.length !== 0)
            throw new common_1.BadRequestException(errors);
        return entity;
    }
    checkPropriety(data) {
        if (data.endereco !== undefined)
            return data.endereco;
        return null;
    }
    async findOne(id) {
        const entity = await this.repository.findOne({});
        if (!entity) {
            throw new common_1.NotFoundException(`Pessoa not found`);
        }
        return entity;
    }
    async remove(id) {
        return this.repository.remove(await this.findOne(id));
    }
};
EnderecoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ENDERECO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EnderecoService);
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=endereco.service.js.map