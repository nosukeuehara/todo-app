import { Hono } from "hono";
import { serve } from '@hono/node-server';
import { deleteTask, getTask, updateTask, TargetId, TaskArg, taskRegister } from "./services/taskService";

const app = new Hono();

// タスクを登録
export const RegistTask = app.post("/task/regist", async (c) => {
  try {
    const regData: TaskArg = await c.req.json();
    const newTask = await taskRegister(regData);
    return c.json(newTask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to register task" }, 500);
  }
});

// 全タスクを取得
export const TaskList = app.get("/task/getTask", async (c) => {
  try {
    const data = await getTask();
    console.log(data);
    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to retrieve tasks" }, 500);
  }
});

// 指定のIDのタスクをアップデート
export const UpdateTask = app.post("/task/update", async (c) => {
  try {
    const regData: TaskArg = await c.req.json();
    const data = await updateTask(regData);
    return c.json(data);
  } catch (error) {
    console.error("Error:", error);
    return c.json({ error: "No task found" }, 404);
  }
});

// 指定したIDのタスクを削除
export const DeleteTask = app.delete("/task/delete", async (c) => {
  try {
    const regData: TargetId = await c.req.json();

    const data = await deleteTask(regData);
    return c.json(data)
  } catch (error) {
    console.error("Error:", error);
    return c.json({ error: "faild delete task" })
  }
});

// ルーティング設定
app.route("/task/regist", RegistTask);
app.route("/task/getTask", TaskList);
app.route("/task/update", UpdateTask);
app.route("/task/delete", DeleteTask)

// サーバーを起動
const port = 8080;

serve({
  fetch: app.fetch,
  port
});

console.log(`Server is running on port ${port}`);
