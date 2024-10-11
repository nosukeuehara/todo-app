/*
  Warnings:

  - Added the required column `TaskName` to the `TaskNameList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TaskNameList" ADD COLUMN     "TaskName" TEXT NOT NULL;
