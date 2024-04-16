import { Hono } from "hono";
import { loginController, registerController } from "./userController";


const users = new Hono()

users.post('/register',(c) => registerController(c))

users.post('/login', (c)=> loginController(c))

export default users