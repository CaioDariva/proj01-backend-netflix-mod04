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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerosController = void 0;
const common_1 = require("@nestjs/common");
const generos_service_1 = require("./generos.service");
const create_genero_dto_1 = require("./dto/create-genero.dto");
let GenerosController = class GenerosController {
    constructor(generosService) {
        this.generosService = generosService;
    }
    async create(createGeneroDto) {
        return this.generosService.createGenero(createGeneroDto);
    }
    async findMany() {
        return this.generosService.getAll();
    }
    async findOne(id) {
        return this.generosService.getOneGenero(+id);
    }
    async update(id, updateGeneroDto) {
        return this.generosService.updateGenero(+id, updateGeneroDto);
    }
    async delete(id) {
        return this.generosService.deleteGenero({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)('/list/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerosController.prototype, "delete", null);
GenerosController = __decorate([
    (0, common_1.Controller)('generos'),
    __metadata("design:paramtypes", [generos_service_1.GenerosService])
], GenerosController);
exports.GenerosController = GenerosController;
//# sourceMappingURL=generos.controller.js.map