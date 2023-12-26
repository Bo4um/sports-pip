"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const argon2 = require("argon2");
const prisma = new client_1.PrismaClient();
const rolesData = [
    { name: 'ROLE_ADMIN' },
    { name: 'ROLE_TRAINER' },
    { name: 'ROLE_STUDENT' },
];
const usersData = [
    {
        username: 'user1',
        hash: 'password1',
    },
    {
        username: 'user2',
        hash: 'password2',
    },
    {
        username: 'user3',
        hash: 'password3',
    },
    {
        username: 'user4',
        hash: 'password4',
    },
    {
        username: 'user5',
        hash: 'password5',
    },
    {
        username: 'user6',
        hash: 'password6',
    },
    {
        username: 'user7',
        hash: 'password7',
    },
    {
        username: 'user8',
        hash: 'password8',
    },
    {
        username: 'user9',
        hash: 'password9',
    },
    {
        username: 'user10',
        hash: 'password10',
    },
];
async function main() {
    const roleAdmin = await prisma.role.create({
        data: { name: 'ROLE_ADMIN' },
    });
    const roleUser = await prisma.role.create({
        data: { name: 'ROLE_USER' },
    });
    const adminUser = await prisma.user.create({
        data: {
            username: 'admin',
            hash: await argon2.hash('admin'),
            roles: {
                connect: [{ id: roleAdmin.id }],
            },
        },
    });
    const regularUser = await prisma.user.create({
        data: {
            username: 'user1',
            hash: await argon2.hash('user1'),
            roles: {
                connect: [{ id: roleUser.id }],
            },
        },
    });
    const students = await prisma.student.createMany({
        data: [
            {
                fullName: 'Иванов Иван Иванович',
                faculty: 'Инженерия',
                facultyGroup: 101,
                birthdayDate: new Date('1995-01-15'),
                userId: regularUser.id,
            },
            {
                fullName: 'Петров Петр Петрович',
                faculty: 'Медицина',
                facultyGroup: 201,
                birthdayDate: new Date('1997-03-22'),
                userId: regularUser.id,
            },
        ],
    });
    const trainers = await prisma.trainer.createMany({
        data: [
            {
                fullName: 'Смирнова Екатерина Андреевна',
                sportAchievements: 'Мастер спорта',
                userId: adminUser.id,
            },
            {
                fullName: 'Федоров Алексей Игоревич',
                sportAchievements: 'Заслуженный тренер',
                userId: adminUser.id,
            },
        ],
    });
    const sports = await prisma.sport.createMany({
        data: [
            { name: 'Футбол' },
            { name: 'Баскетбол' },
            { name: 'Волейбол' },
        ],
    });
    const groups = await prisma.group.createMany({
        data: [
            {
                title: 'Молодежная команда',
                sportId: sports[0].id,
            },
            {
                title: 'Женская команда',
                sportId: sports[1].id,
            },
        ],
    });
    const schedules = await prisma.schedule.createMany({
        data: [
            {
                dateTimeStart: new Date('2023-10-30T10:00:00Z'),
                dateTimeEnd: new Date('2023-10-30T12:00:00Z'),
                groupId: groups[0].id,
            },
            {
                dateTimeStart: new Date('2023-10-31T14:00:00Z'),
                dateTimeEnd: new Date('2023-10-31T16:00:00Z'),
                groupId: groups[1].id,
            },
        ],
    });
    const linkTrainer1 = await prisma.group.update({
        where: { id: groups[0].id },
        data: {
            trainers: { connect: { id: trainers[0].id } },
            students: { connect: { id: students[0].id } },
        },
    });
    const linkTrainer2 = await prisma.group.update({
        where: { id: groups[1].id },
        data: {
            trainers: { connect: { id: trainers[1].id } },
            students: { connect: { id: students[1].id } },
        },
    });
    const linkSchedule1 = await prisma.schedule.update({
        where: {
            id: schedules[0].id,
        },
        data: {
            trainers: { connect: { id: trainers[0].id } },
        },
    });
    const linkSchedule2 = await prisma.schedule.update({
        where: {
            id: schedules[1].id,
        },
        data: {
            trainers: { connect: { id: trainers[1].id } },
        },
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map