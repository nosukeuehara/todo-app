import { Hono } from "hono";
import { getTask, TaskArg, taskRegister } from "../../services/taskService";

const app = new Hono();

export const registTask = app.post("/", async (c) => {
  try {
    const regData: TaskArg = await c.req.json();
    console.log("Received data:", regData);

    const newTask = await taskRegister(regData);
    return c.json(newTask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to register task" }, 500);
  }
});


export const taskList = app.get("/", async (c) => {
  const data = await getTask()
  console.log(data)
  return c.json(data)
})