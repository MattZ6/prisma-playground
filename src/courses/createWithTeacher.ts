import { prisma } from "../database";

async function createCourseWithTeacher() {
  await prisma.course.create({
    data: {
      name: 'Curso com professor',
      description: 'Este é um curso criado juntamente com um professor. Tudo ao mesmo tempo.',
      duration_in_hours: 2,
      teacher: {
        create: {
          name: 'Matheus'
        }
      }
    }
  });
}

createCourseWithTeacher();
