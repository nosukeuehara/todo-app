import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { registTask } from './api/task/route';


const app = new Hono()

app.route("/task/regist", registTask);

const port = 8080

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
