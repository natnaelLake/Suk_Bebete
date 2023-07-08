import express  from 'express'
const routePage = express.Router()

import { createUserController, getUserController } from "../controllers/user.js";

routePage.post('/createUser',createUserController)
routePage.get('/getUser',getUserController)

export default routePage