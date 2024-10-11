import { Hono } from "hono";
import { TaskArgs } from "../../services/taskService";

const app = new Hono();

export const registTask = app.post("/", async (c) => {
  const regData: TaskArgs = await c.req.json()
  console.log(regData)
  return c.json({ message: "Task received" });
})