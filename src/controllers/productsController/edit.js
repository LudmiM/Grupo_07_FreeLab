const db = require("../../database/models");

module.exports = async (req, res) => {
    const id = +req.params.id;

      try {
        const project = await db.Project.findByPk(id, {
          include : [
          
            {model: db.Skill,as:'skills'}

          ]
        });
        console.log('this is project '+project+' el id es '+id)
        
        const skills = project.skills;
    
      res.render('products/project-edit', { 
       project: project,
       skills: skills
        
      })

    } catch (error) {console.log(error)
   }  
}