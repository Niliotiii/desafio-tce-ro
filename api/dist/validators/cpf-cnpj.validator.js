"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCNPJ = exports.IsCPF = void 0;
const class_validator_1 = require("class-validator");
const brazilian_values_1 = require("brazilian-values");
function IsCPF(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCPF',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return true;
                    }
                    return (0, brazilian_values_1.isCPF)(value);
                },
                defaultMessage(args) {
                    return `${args.property} inválido`;
                },
            },
        });
    };
}
exports.IsCPF = IsCPF;
function IsCNPJ(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCNPJ',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return true;
                    }
                    return (0, brazilian_values_1.isCNPJ)(value);
                },
                defaultMessage(args) {
                    return `${args.property} inválido`;
                },
            },
        });
    };
}
exports.IsCNPJ = IsCNPJ;
//# sourceMappingURL=cpf-cnpj.validator.js.map