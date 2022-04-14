import { prisma } from "../database";

async function coursesPagination() {
  const skip = 6;
  const take = 2;

  const courses = await prisma.course.findMany({
    take,
    skip,
    orderBy: {
      name: 'asc',
    },
  });

  console.log(courses);
}

coursesPagination();
