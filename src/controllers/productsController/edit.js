const db = require("../../database/models");

module.exports = async (req, res) => {
    const id = +req.params.id;

      try {
        const project = await db.Project.findByPk(id, {
          include : [
            {model: db.Skill,as:'skills'}
          ]
        });
        const skills = await db.Skill.findAll({
          where: {
              id: {
                  [db.Sequelize.Op.gte]: 53
              }
          }
        });
        res.render('products/project-edit', { 
        project: project,
        skills
        })

    } catch (error) {console.log(error)
   }  
}