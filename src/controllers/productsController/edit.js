const db = require("../../database/models");

module.exports = async (req, res) => {
    const id  = +req.params.id;

      try { 
        const project = await db.Project.findByPk(id, {
          include : ['categories', 'skills']
        });


      
      
    //habilidades y categorias const categories = await db.Category.findAll({});
      const categories = await db.Category.findAll({});

        res.render('products/project-edit', { 
            project,
            categories
        })
      } catch (error) {
        console.log(error);
     }
    
   
   };
