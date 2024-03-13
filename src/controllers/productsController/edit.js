const db = require("../../database/models");

module.exports = async (req, res) => {
    const id = +req.params.id;

      try {
        const project = await db.Project.findByPk(id);
        console.log('this is project '+project+' el id es '+id)
      
    //habilidades y categorias
      const skills = await db.Skill.findAll({});
      const categories = await db.Category.findAll({});

      res.render('products/project-edit', { 
       project,
        skills,
        categories
      })

    } catch (error) {console.log(error)
   }  
}