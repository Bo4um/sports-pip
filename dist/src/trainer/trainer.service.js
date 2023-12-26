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
exports.TrainerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TrainerService = class TrainerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const trainer = await this.prisma.trainer.create({
            data: dto,
        });
        return trainer;
    }
    findAll() {
        return this.prisma.trainer.findMany();
    }
    async findOne(id) {
        const trainer = await this.prisma.trainer.findUnique({
            where: {
                id: id,
            },
        });
        if (!trainer) {
            throw new common_1.NotFoundException(`trainer with id = ${id} was not found`);
        }
        return trainer;
    }
    async update(id, dto) {
        const trainer = await this.prisma.trainer.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
            },
        });
        return trainer;
    }
    async remove(id) {
        const trainer = await this.prisma.trainer
            .delete({
            where: {
                id: id,
            },
        })
            .catch(() => {
            throw new common_1.NotFoundException(`trainer with id = ${id} was not found`);
        });
        return trainer;
    }
};
exports.TrainerService = TrainerService;
exports.TrainerService = TrainerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrainerService);
//# sourceMappingURL=trainer.service.js.map