/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Task" (
    "taskId" SERIAL NOT NULL,
    "taskName" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);

-- CreateTable
CREATE TABLE "RegDate" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "RegDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
