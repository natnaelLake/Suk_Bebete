import express  from 'express'
import {createAdminController,getAdminController } from '../controllers/admin.js' 
import passportConnection from '../config/passport/setupPassport.js'

const adminRouter = express.Router()


adminRouter.post('/createAdmin',createAdminController)
adminRouter.get('/getAdmin',passportConnection,getAdminController)

export default adminRouter