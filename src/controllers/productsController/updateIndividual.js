const {validationResult} = require('express-validator')
const db = require("../../database/models");

module.exports = async (req, res) => {
    const { about,price,idSpecialty,idKnowledge,skillesInd } = req.body;
    const id = +req.body.idIndividual

    try{
        await db.Individual.update(
            
            {about,price,idSpecialty,idKnowledge},
            { where :  {id :id} }
        );
        const skillsOld = await db.IndividualSkill.findAll(
            { where :  {idIndividual :id} }
        ); 
     
        const skillsNew = [skillesInd]
        var agregar = []
        var eliminar = []

        skillsOld.forEach(s => {
            if (skillsNew.includes(s.idSkill)) {
                agregar.push(s.idSkill)
            }
        })
        skillsNew.forEach(s => {
            if (skillsOld.idSkill.includes(s)) {
                eliminar.push(s)
            }
        })

        return res.redirect('/productos/agregarIndividual/'+id)
     
    } catch(error) { 
        console.log(error)
    } 
}    
