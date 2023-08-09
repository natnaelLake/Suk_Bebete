
import Fileuploader from 'express-fileupload'
import router from './routes.js'
import express from 'express'

const app = express()

const fileUploader = app.use(Fileuploader())

export default fileUploader