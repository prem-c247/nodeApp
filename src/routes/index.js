const express = require('express')
const userRoute = require('./userRoute.js')
const homeRoute = require('./homeRoute.js')

const router = express.Router()

router.use('/', homeRoute)
router.use('/user', userRoute)

module.exports = router;