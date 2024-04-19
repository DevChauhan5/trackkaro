import { Hono } from 'hono'
import user from './user/userRoutes'

const app = new Hono().basePath('/api/v1')

app.get('/', (c) => {
    return c.html('<h1>Trackkaro APIs</h1>')
})
app.route('/user', user)

if (process.env.NODE_ENV === "development") {
    console.log(`Server is running at http://localhost:3000`);
}

export default app
