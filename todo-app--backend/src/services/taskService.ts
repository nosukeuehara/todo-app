// userService.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// タスクを取得する関数
export const getTask = async () => {
  return await prisma.task.findMany();
};

// タスクを登録する関数
export const taskRegister = async (clientData: TaskArg) => {
  console.log("Received clientData:", clientData); // 追加: デバッグ用ログ

  // startとendの日付を検証
  const startDate = new Date(clientData.start);
  const endDate = new Date(clientData.end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format for start or end.");
  }

  return await prisma.task.create({
    data: {
      start: startDate, // 有効なDate型に変換
      end: endDate,     // 有効なDate型に変換
      comments: clientData.comments,
      taskName: clientData.taskName
    }
  });
}

// ユニークなIDのタスクを取得する関数
export const getUniqueTask = async (clientData: TargetId) => {
  console.log(clientData);

  // idがundefinedでないことを確認
  if (clientData.id === undefined) {
    throw new Error("Invalid ID provided.");
  }

  const targetColumn = await prisma.task.findUnique({
    where: {
      id: clientData.id, // ここでidを指定
    },
  });

  return targetColumn; // 必要に応じて結果を返す
};



// タスク登録用の引数インターフェース
export interface TaskArg {
  start: string; // 文字列型（ISO-8601形式）
  end: string;   // 文字列型（ISO-8601形式）
  comments: string;
  taskName: string;
}

export interface TargetId {
  id: number
}