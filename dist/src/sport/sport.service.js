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
exports.SportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SportService = class SportService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const sport = await this.prisma.sport.create({
            data: dto,
        });
        return sport;
    }
    findAll() {
        return this.prisma.sport.findMany();
    }
    async findOne(id) {
        const sport = await this.prisma.sport.findUnique({
            where: {
                id: id,
            },
        });
        if (!sport) {
            throw new common_1.NotFoundException(`sport with id = ${id} was not found`);
        }
        return sport;
    }
    async update(id, dto) {
        const sport = await this.prisma.sport.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
            },
        });
        return sport;
    }
    async remove(id) {
        const sport = await this.prisma.sport
            .delete({
            where: {
                id: id,
            },
        })
            .catch(() => {
            throw new common_1.NotFoundException(`sport with id = ${id} was not found`);
        });
        return sport;
    }
};
exports.SportService = SportService;
exports.SportService = SportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SportService);
//# sourceMappingURL=sport.service.js.map