// import app from './express.js'
import Fileuploader from 'express-fileupload'
// const fileuploader = require('express-fileuploader')
import router from './routes.js'
import express from 'express'

const app = express()

const fileUploader = app.use(Fileuploader())

export default fileUploader