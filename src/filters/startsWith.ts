import { prisma } from "../database";

async function startsWith() {
  // const courses = await prisma.course.findMany({
  //   where: {
  //     name: {
  //       startsWith: 'react',
  //       mode: 'insensitive',
  //     }
  //   }
  // });

  const courses = await prisma.course.findMany({
    where: {
      OR: [
        {
          name: {
            mode: 'insensitive',
            contains: 'react'
          }
        },
        {
          name: {
            contains: 'js',
            mode: 'insensitive'
          }
        }
      ],
      AND: {
        duration_in_hours: {
          gt: 100,
        }
      }
    }
  });

  console.log(courses);
}

startsWith();
