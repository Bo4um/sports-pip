import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const roles = await prisma.role.createMany({
    data: [
      { name: 'ROLE_ADMIN' },
      { name: 'ROLE_TRAINER' },
      { name: 'ROLE_STUDENT' },
    ],
  });

  // Создаем пользователей
  const adminUser = await prisma.user.create({
    data: {
      username: 'admin',
      hash: await argon2.hash('admin'),
      roles: {
        connect: [{ id: roles[0].id }],
      },
    },
  });

  const studentUser = await prisma.user.createMany({
    data: [
      {
        username: 'student1',
        hash: await argon2.hash('student1'),
        roles: {
          connect: [{ id: roles[0].id }],
        },
      },
      {
        username: 'student2',
        hash: await argon2.hash('student2'),
        roles: {
          connect: [{ id: roles[0].id }],
        },
      },
    ],
  });

  // Создаем студентов
  const students = await prisma.student.createMany({
    data: [
      {
        fullName: 'Иванов Иван Иванович',
        faculty: 'Инженерия',
        facultyGroup: 101,
        birthdayDate: new Date('1995-01-15'),
        userId: roles[0].id,
      },
      {
        fullName: 'Петров Петр Петрович',
        faculty: 'Медицина',
        facultyGroup: 201,
        birthdayDate: new Date('1997-03-22'),
        userId: regularUser.id,
      },
      // Добавьте еще студентов по аналогии
    ],
  });

  // Создаем тренеров
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
      // Добавьте еще тренеров по аналогии
    ],
  });

  // Создаем виды спорта
  const sports = await prisma.sport.createMany({
    data: [
      { name: 'Футбол' },
      { name: 'Баскетбол' },
      { name: 'Волейбол' },
      // Добавьте еще видов спорта по аналогии
    ],
  });

  // Создаем группы
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
      // Добавьте еще группы по аналогии
    ],
  });

  // Создаем расписания
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
      // Добавьте еще расписания по аналогии
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
