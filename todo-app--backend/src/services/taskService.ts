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
      id: clientData.id,
      start: clientData.start,
      end: clientData.end,
      comments: clientData.comments,
      taskName: {
        create: clientData.taskName // 正しい形式でネストされたタスクリストを作成
      }
    }
  });
}

// タスク登録用の引数インターフェース
export interface TaskArg {
  id: number;
  start: Date;
  end: Date;
  comments: string;
  taskName: { TaskName: string }[]; // TaskName プロパティに修正
}
