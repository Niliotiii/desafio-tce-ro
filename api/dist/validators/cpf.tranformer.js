"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfTransformer = void 0;
class CpfTransformer {
    to(value) {
        return value.replace(/[^\d]+/g, '');
    }
    from(value) {
        return value;
    }
}
exports.CpfTransformer = CpfTransformer;
//# sourceMappingURL=cpf.tranformer.js.map