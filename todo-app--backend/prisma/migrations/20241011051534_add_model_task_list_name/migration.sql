/*
  Warnings:

  - You are about to drop the column `taskName` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskName";

-- CreateTable
CREATE TABLE "TaskNameList" (
    "taskTaskId" INTEGER NOT NULL,

    CONSTRAINT "TaskNameList_pkey" PRIMARY KEY ("taskTaskId")
);

-- AddForeignKey
ALTER TABLE "TaskNameList" ADD CONSTRAINT "TaskNameList_taskTaskId_fkey" FOREIGN KEY ("taskTaskId") REFERENCES "Task"("taskId") ON DELETE RESTRICT ON UPDATE CASCADE;
