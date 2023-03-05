import express from 'express'
import useController from '../controller/useController.js'

const router = express.Router()

router.get("/", useController.home)
router.post("/otpemail", useController.userLogin)



export default router