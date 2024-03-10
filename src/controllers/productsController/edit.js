const db = require("../../database/models");

module.exports = async (req, res) => {
    const { id } = req.params;

      try {
        const project = await db.Project.findByPk(id);

      
    //habilidades y categorias
      const skills = await db.Skill.findAll({});
      const categories = await db.Category.findAll({});

   
      res.render('products/product-edit', { 
       project,
        skills,
        categories
      })

    } catch (error) {console.log(error)
   }  
}