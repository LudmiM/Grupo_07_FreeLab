const db = require("../../database/models");

function cargarIndividuals(specialty,about,price,idProject,idCategory) {
   const individual = db.Individual.create({
      specialty: specialty,
      about: about,
      price: price,
      idProject: idProject,
      idCategory: idCategory,
      chosen: false
      })
}
function estructuraSkilles(skilles) {
   const newSkills=skilles.map(s => {
      return {
         idProject: project.id,
         idSkill: parseInt(s)
      };
   }) 
   return newSkills
}

module.exports = (req, res) => {

  try {
   const { title,description,idStatus,skilles} = req.body;
   const idCompany = req.session.idCompany;
   
   const project = db.Project.create({
      title:title,
      description: description,
      idStatus: idStatus,
      idCompany,
      createdAt : new Date(),
      updatedAt : new Date()
   })
   const newSkills=estructuraSkilles(skilles)
   db.ProjectSkill.bulkCreate(newSkills)

   const {specialty,about,price,idProject,idCategory}=req.body
   cargarIndividuals(specialty,about,price,idProject,idCategory)
   req.body.forEach(e => {
      
   });

   return res.redirect('/usuarios/perfil');
   } catch (error) {
   
   }
}    