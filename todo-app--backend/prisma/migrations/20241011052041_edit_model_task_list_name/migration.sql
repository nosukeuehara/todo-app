/*
  Warnings:

  - Added the required column `taskNameListTaskTaskId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TaskNameList" DROP CONSTRAINT "TaskNameList_taskTaskId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "taskNameListTaskTaskId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskNameListTaskTaskId_fkey" FOREIGN KEY ("taskNameListTaskTaskId") REFERENCES "TaskNameList"("taskTaskId") ON DELETE RESTRICT ON UPDATE CASCADE;
