const db = require("../../database/models");

module.exports = async (req, res) => {
    const skills = await db.Skill.findAll({
        where: {
            id: {
                [db.Sequelize.Op.gte]: 53
            }
        }
    });
    res.render('products/project-create', {skills})
}