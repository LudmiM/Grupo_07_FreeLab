const db = require("../../database/models");

module.exports = async (req, res) => {
    const skills = await db.Skill.findAll({});
    
    res.render('products/project-create', {skills})
}