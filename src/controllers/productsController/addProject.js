const db = require("../../database/models");

function estructuraSkillesInd(skilles,id) {
   skilles = [skilles];
   const newSkills=skilles.map(s => {
      return {
         idIndividual: id,
         idSkill: parseInt(s)
      };
   }) 
   return newSkills
}

async function cargarIndividuals(specialty,about,price,idProject,idCategory,skillesInd) {
   const individual = await db.Individual.create({
      specialty,
      about,
      price,
      idProject,
      idCategory,
      chosen: false
   })
   const newSkills=estructuraSkillesInd(skillesInd,individual.id)
   db.IndividualSkill.bulkCreate(newSkills)
}
function estructuraSkilles(skilles,id) {
   skilles = [skilles];
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
   const {specialty,about,price,idCategory,duplicateCount,skillesInd}=req.body
   cargarIndividuals(specialty,about,price,project.id,idCategory,skillesInd)
   
   for (let i = 2; i <= +duplicateCount; i++) {
      const specialty = req.body[`specialty_${i}`];
      const about = req.body[`about_${i}`];
      const price = req.body[`price_${i}`];
      const idCategory = req.body[`idCategory_${i}`];
      const skillesInd = req.body[`skillesInd_${i}`];
      cargarIndividuals(specialty,about,price,project.id,idCategory,skillesInd)
   }

   return res.redirect('/usuarios/perfil');
   } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
   }
}    