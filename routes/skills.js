//routes/skills.js
const express = require('express')
const router = express.Router()

let skillsControl = require('../controls/skills')

router.get('/', skillsControl.index)

module.exports = router
