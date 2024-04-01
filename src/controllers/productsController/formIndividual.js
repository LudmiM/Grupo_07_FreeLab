const db = require("../../database/models");

module.exports = async (req, res) => {
    const skills = await db.Skill.findAll({});
    const idProject = +req.params.id;
    const individuals = await db.Individual.findAll({
        where: {
            idProject: idProject
        },
        include: [{
            model: db.Skill,
            as: 'skills',
            through: {
                attributes: [] 
            },
            attributes: ['name']
        }]
    });
    res.render('products/table-for-ind', {skills,individuals,idProject})
}