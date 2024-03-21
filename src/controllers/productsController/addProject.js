const db = require("../../database/models");

function estructuraSkillesInd(skilles,id) {
   if (typeof skilles === 'string') {
      skilles = [skilles];
   }
   const newSkills=skilles.map(s => {
      return {
         idIndividual: id,
         idSkill: parseInt(s)
      };
   }) 
   return newSkills
}

function cargarIndividuals(specialty,about,price,idProject,idCategory,skillesInd) {
   console.log(`Estoy en individuals ${specialty} ${about} ${price} category is ${idCategory} skilles is ${skillesInd} a numero proyecto ${idProject}`)
   const individual = db.Individual.create({
      specialty,
      about,
      price,
      idProject,
      idCategory,
      chosen: false
   })
   console.log('Salgo de individuals db')
   const newSkills=estructuraSkillesInd(skillesInd,individual.id)
   db.IndividualSkill.bulkCreate(newSkills)
}
function estructuraSkilles(skilles,id) {
   if (typeof skilles === 'string') {
      skilles = [skilles];
   }
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
   console.log(`Date for proyects is ${title} ${description} ${idStatus} ${skilles} a numero proyecto ${idCompany}`)
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
   //Hasta aca todo fucniona bien
   console.log('This is proyecto '+project)
   const {specialty,about,price,idCategory,duplicateCount,skillesInd}=req.body
   console.log(`Crgo1 ${specialty} ${about} ${price} ${duplicateCount} ${skillesInd} a numero proyecto ${project.id}`)
   cargarIndividuals(specialty,about,price,project.id,idCategory,skillesInd)
   
   for (let i = 2; i <= +duplicateCount; i++) {
      const specialty = req.body[`specialty_${i}`];
      const about = req.body[`about_${i}`];
      const price = req.body[`price_${i}`];
      const idCategory = req.body[`idCategory_${i}`];
      const skillesInd = req.body[`skillesInd_${i}`];
      console.log(`Crgo2 ${specialty} ${about} ${price} ${duplicateCount} ${skillesInd} a numero proyecto ${project.id}`)
      //cargarIndividuals(specialty,about,price,project.id,idCategory,skillesInd)
   }

   return res.redirect('/usuarios/perfil');
   } catch (error) {
      console.error(error);
       return res.status(500).send('Error interno del servidor');
   }
}    