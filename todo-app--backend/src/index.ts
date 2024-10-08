import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { users } from "./api/user/route";

const app = new Hono()

app.route("/users", users);

const port = 8080

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
