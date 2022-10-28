// models/skill.js

let skills = [
    {id: 1, skill: 'HTML', mastered: true}, 
    {id: 2, skill: 'CSS', mastered: true}, 
    {id: 3, skill: 'JavaScript', mastered: false}, 
    {id: 4, skill: 'MongoDB', mastered: false}, 
    {id: 5, skill: 'NodeJS', mastered: false},
    {id: 6, skill: 'Express', mastered: false}, 
]
  
const getAll = function() {
    return skills
}

const getOne = function(id) {
  id = parseInt(id)
  return skills.find((skill) => skill.id === id)
}

const deleteOne = function(id) {
  id = parseInt(id)
  let idx = skills.findIndex(skill => skill.id === id)
  skills.splice(idx, 1)
}

const create = function(skill) {
  skill.id = Date.now() % 1000000
  skill.mastered = false
  skills.push(skill)
  console.log(skills)
}

let updateSkill = function(id, skill) {
  id = parseInt(id)
  const targetSkill = skills.find((skill) => skill.id === id)
  targetSkill.skill = skill.skill
  targetSkill.mastered = skill.mastered !== 'false'
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
  create,
  updateSkill
}

  