//controllers/skill.js
const skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: skill,getAll()
    })
}

module.exports = {
    index
}