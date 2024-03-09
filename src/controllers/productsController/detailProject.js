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

        if (!p) {
            return res.status(404).send('Proyecto no encontrado');
        }
        const skills = p.skills.map(skill => skill.name);

        const ind = await db.Individual.findAll({
            where: {
                idProject: p.id
            }
        });
        
        return res.render('products/project-detail', { p, skills, ind });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
