// routes/skills.js
let express = require('express')
let skills = require('../controllers/skills')
let router = express.Router()

let skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)

router.get('/new-skill', skillsCtrl.newSkill)
router.get('/:id', skillsCtrl.show)
router.get('/:id/edit', skillsCtrl.editSkill)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.deleteSkill)
router.put('/:id', skillsCtrl.update)

module.exports = router