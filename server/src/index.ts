import { Hono } from 'hono'
import user from './user/userRoutes'
import expense from './expense/expenseRoutes'
import authMiddleware from '../middlewares/authMiddleware'

const app = new Hono().basePath('/api/v1')

app.use('/expense/*', authMiddleware)

app.get('/', (c) => {
    return c.html('<h1>Trackkaro APIs</h1>')
})
app.route('/user', user)
app.route('/expense', expense)

if (process.env.NODE_ENV === "development") {
    console.log(`Server is running at http://localhost:3000`);
}

export default app
