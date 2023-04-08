const express = require('express')
const router = new express.Router()
const userController = require ('../../controllers/user/index')


router.get('/user/helloWorld', userController.helloWorld)

module.exports = router