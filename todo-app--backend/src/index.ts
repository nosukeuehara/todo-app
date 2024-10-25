import { Hono } from "hono";
import { serve } from '@hono/node-server';
import { getTask, getUniqueTask, TargetId, TaskArg, taskRegister } from "./services/taskService";

const app = new Hono();

// タスクを登録するエンドポイント
export const registTask = app.post("/task/regist", async (c) => {
  try {
    const regData: TaskArg = await c.req.json();
    const newTask = await taskRegister(regData);
    return c.json(newTask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to register task" }, 500);
  }
});

// タスクを取得するエンドポイント
export const taskList = app.get("/task/getTask", async (c) => {
  try {
    const data = await getTask();
    console.log(data);
    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to retrieve tasks" }, 500);
  }
});

// ユニークなタスクを取得するエンドポイント
export const uniqueTask = app.post("/task/unique", async (c) => {
  try {
    const regData: TargetId = await c.req.json();
    console.log("Received data:", regData.id);

    const data = await getUniqueTask(regData);
    return c.json(data);
  } catch (error) {
    console.error("Error:", error);
    return c.json({ error: "No task found" }, 404);
  }
});

// ルーティング設定
app.route("/task/regist", registTask);
app.route("/task/getTask", taskList);
app.route("/task/unique", uniqueTask);

// サーバーを起動
const port = 8080;

serve({
  fetch: app.fetch,
  port
});

console.log(`Server is running on port ${port}`);
