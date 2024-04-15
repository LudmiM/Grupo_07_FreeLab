const db = require('./../../database/models');

module.exports = async (req, res) => {
    try {
        const id = +req.params.id;
        const p = await db.Project.findByPk(id, {
            include: [{
                model: db.Skill,
                as: 'skills', 
                through: {
                    attributes: [] 
                },
                attributes: ['name']
            }]
        });

        const ind = await db.Individual.findAll({
            where: {
                idProject: p.id
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
      
        return res.render('products/project-detail', { p, ind });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
