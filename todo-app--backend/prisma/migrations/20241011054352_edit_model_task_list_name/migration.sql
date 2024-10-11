/*
  Warnings:

  - You are about to drop the `RegDate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RegDate" DROP CONSTRAINT "RegDate_regDateId_fkey";

-- DropTable
DROP TABLE "RegDate";
