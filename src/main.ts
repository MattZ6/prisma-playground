import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createCourses() {
  await prisma.course.createMany({
    data: [
      {
        name: 'Curso de Node JS',
        description: 'Curso excelente de Node JS, direto ao ponto.',
        duration_in_hours: 180,
      },
      {
        name: 'Curso de React JS',
        description: 'Curso excelente de React JS, direto ao ponto.',
        duration_in_hours: 200,
      },
      {
        name: 'Curso de React Native',
        description: 'Curso excelente de React Native, direto ao ponto.',
        duration_in_hours: 220,
      },
    ]
  });
}

async function main() {
}

main();
