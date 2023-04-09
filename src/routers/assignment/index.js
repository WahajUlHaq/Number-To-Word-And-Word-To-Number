const express = require('express')
const router = new express.Router()

const assignmentController = require ('../../controllers/assignment')

router.post('/to/number', assignmentController.toNumber)
router.post('/to/words', assignmentController.toWords)

module.exports = router
