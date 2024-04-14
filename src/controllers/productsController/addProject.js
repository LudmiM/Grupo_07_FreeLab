const db = require("../../database/models");

function estructuraSkilles(skilles,id) {
   const newSkills=skilles.map(s => {
      return {
         idProject: id,
         idSkill: parseInt(s)
      };
   }) 
   return newSkills
}

module.exports = async (req, res) => {
  try {
      const { title,description,idStatus,skilles} = req.body;
      const idCompany = req.session.idCompany;
      const project = await db.Project.create({
         title,
         description,
         idStatus,
         idCompany,
         createdAt : new Date(),
         updatedAt : new Date()
      })
      const newSkills=estructuraSkilles(skilles,project.id)
      db.ProjectSkill.bulkCreate(newSkills)
      return res.redirect('/productos/agregarIndividual/'+project.id)
   
   } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
   }
}    