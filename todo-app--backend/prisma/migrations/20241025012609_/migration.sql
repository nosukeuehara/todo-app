/*
  Warnings:

  - You are about to drop the column `TaskName` on the `Task` table. All the data in the column will be lost.
  - Added the required column `taskName` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "TaskName",
ADD COLUMN     "taskName" TEXT NOT NULL;
