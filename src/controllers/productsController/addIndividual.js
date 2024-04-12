const db = require("../../database/models");

function estructuraSkilles(skilles,id) {
   skilles = [skilles];
   const newSkills=skilles.map(s => {
      return {
         idIndividual: id,
         idSkill: parseInt(s)
      };
   }) 
   return newSkills
}

async function cargarIndividuals(about,price,idProject,idSpecialty,idKnowledge,skillesInd) {
   const individual = await db.Individual.create({
      about,
      price,
      idProject,
      idSpecialty,
      idKnowledge,
      chosen: false
   })
   const newSkills=estructuraSkilles(skillesInd,individual.id)
   db.IndividualSkill.bulkCreate(newSkills)
}
module.exports = async (req, res) => {
    try {
        const idProject = +req.params.id;
        const {about,price,idSpecialty,idKnowledge,skillesInd}=req.body
        cargarIndividuals(about,price,idProject,idSpecialty,idKnowledge,skillesInd)
        return res.redirect('/productos/agregarIndividual/'+idProject);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
}    