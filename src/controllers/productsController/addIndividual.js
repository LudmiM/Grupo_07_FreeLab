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

async function cargarIndividuals(specialty,about,price,idProject,idCategory,skillesInd) {
   const individual = await db.Individual.create({
      specialty,
      about,
      price,
      idProject,
      idCategory,
      chosen: false
   })
   const newSkills=estructuraSkilles(skillesInd,individual.id)
   db.IndividualSkill.bulkCreate(newSkills)
}
module.exports = async (req, res) => {
    try {
        const idProject = +req.params.id;
        const {specialty,about,price,idCategory,skillesInd}=req.body
        cargarIndividuals(specialty,about,price,idProject,idCategory,skillesInd)
        return res.redirect('/productos/agregarIndividual/'+idProject);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
}    