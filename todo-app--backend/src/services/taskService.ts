// userService.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// タスクを取得する関数
export const getTask = async () => {
  return await prisma.task.findMany();
};

// タスクを登録する関数
export const taskRegister = async (clientData: TaskArg) => {
  return await prisma.task.create({
    data: {
      start: new Date(clientData.start), // 文字列をDate型に変換
      end: new Date(clientData.end),     // 文字列をDate型に変換
      comments: clientData.comments,
      taskName: clientData.taskName
    }
  });
}


// タスク登録用の引数インターフェース
export interface TaskArg {
  start: string; // 文字列型（ISO-8601形式）
  end: string;   // 文字列型（ISO-8601形式）
  comments: string;
  taskName: string;
}
