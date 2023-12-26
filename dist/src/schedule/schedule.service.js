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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ScheduleService = class ScheduleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const schedule = await this.prisma.schedule.create({
            data: dto,
        });
        return schedule;
    }
    findAll() {
        return this.prisma.schedule.findMany();
    }
    async findOne(id) {
        const schedule = await this.prisma.schedule.findUnique({
            where: {
                id: id,
            },
        });
        if (!schedule) {
            throw new common_1.NotFoundException(`schedule with id = ${id} was not found`);
        }
        return schedule;
    }
    async update(id, dto) {
        const schedule = await this.prisma.schedule.update({
            where: {
                id: id,
            },
            data: {
                ...dto,
            },
        });
        return schedule;
    }
    async remove(id) {
        const schedule = await this.prisma.schedule
            .delete({
            where: {
                id: id,
            },
        })
            .catch(() => {
            throw new common_1.NotFoundException(`schedule with id = ${id} was not found`);
        });
        return schedule;
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map