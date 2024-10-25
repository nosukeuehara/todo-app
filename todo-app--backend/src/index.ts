import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { registTask, taskList } from './api/task/route';


const app = new Hono()

app.route("/task/regist", registTask);

app.route("/task/getTask", taskList);

const port = 8080

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
