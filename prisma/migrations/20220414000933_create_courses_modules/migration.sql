-- CreateTable
CREATE TABLE "courses_modules" (
    "course_id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_modules_course_id_module_id_key" ON "courses_modules"("course_id", "module_id");

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
