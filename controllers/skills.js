// controllers/skills.js

let Skill = require('../models/skill')

let index = function(req, res) {
  res.render('skills', {
    skills: Skill.getAll()
  })
}

let show = function(req, res) {
  res.render('skills/show-skills', {
    skill: Skill.getOne(req.params.id),
  })
}

let newSkill = function(req, res) {
  res.render('skills/new-skill')
}

let create = function(req, res) {
  Skill.create(req.body)
  res.redirect('/skills')
}

let deleteSkill = function(req, res) {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

let editSkill = function(req, res) {
  res.render('skills/edit-skill', {
     skill: Skill.getOne(req.params.id)
  })
}

let update = function(req, res) {
  Skill.updateSkill(req.params.id, req.body)
  res.redirect('/skills')
}

module.exports = {
  index,
  show,
  deleteSkill,
  newSkill,
  create,
  editSkill,
  update
}