const db = require("../../database/models");

module.exports = async (req, res) => {
    const skills = await db.Skill.findAll({});
    const categories = await db.Category.findAll({});
    res.render('products/project-create', {skills, categories})
}