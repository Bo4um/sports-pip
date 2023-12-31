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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon2 = require("argon2");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const userInDb = await this.prisma.user.findUnique({
            where: {
                username: dto.username,
            },
        });
        if (userInDb) {
            throw new common_1.ForbiddenException('This username is already in use');
        }
        const hash = await argon2.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                username: dto.username,
                hash,
            },
        });
        delete user.hash;
        return user;
    }
    async findAll() {
        const users = await this.prisma.user.findMany();
        users.map((user) => delete user.hash);
        return users;
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with id = ${id} was not found`);
        }
        delete user.hash;
        return user;
    }
    async findByUsername(username) {
        const user = await this.prisma.user.findUnique({
            where: {
                username,
            },
            include: {
                roles: true,
            },
        });
        return user;
    }
    async update(id, updateUserDto) {
        const updatedUser = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ...updateUserDto,
            },
        });
        delete updatedUser.hash;
        return updatedUser;
    }
    async remove(id) {
        const deleteUser = await this.prisma.user
            .delete({
            where: {
                id: id,
            },
        })
            .catch(() => {
            throw new common_1.NotFoundException(`User with id = ${id} was not found`);
        });
        delete deleteUser.hash;
        return deleteUser;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map