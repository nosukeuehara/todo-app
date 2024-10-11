/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `taskId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskNameListTaskTaskId` on the `Task` table. All the data in the column will be lost.
  - The primary key for the `TaskNameList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `taskTaskId` on the `TaskNameList` table. All the data in the column will be lost.
  - Added the required column `regDateId` to the `RegDate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskNameListId` to the `TaskNameList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskNameListTaskTaskId_fkey";

-- AlterTable
ALTER TABLE "RegDate" ADD COLUMN     "regDateId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
DROP COLUMN "taskId",
DROP COLUMN "taskNameListTaskTaskId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TaskNameList" DROP CONSTRAINT "TaskNameList_pkey",
DROP COLUMN "taskTaskId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "taskNameListId" INTEGER NOT NULL,
ADD CONSTRAINT "TaskNameList_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "RegDate" ADD CONSTRAINT "RegDate_regDateId_fkey" FOREIGN KEY ("regDateId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskNameList" ADD CONSTRAINT "TaskNameList_taskNameListId_fkey" FOREIGN KEY ("taskNameListId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
