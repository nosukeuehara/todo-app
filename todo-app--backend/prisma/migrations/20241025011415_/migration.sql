/*
  Warnings:

  - You are about to drop the `TaskNameList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `TaskName` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TaskNameList" DROP CONSTRAINT "TaskNameList_taskNameListId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "TaskName" TEXT NOT NULL;

-- DropTable
DROP TABLE "TaskNameList";
