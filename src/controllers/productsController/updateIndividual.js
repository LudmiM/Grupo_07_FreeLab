const {validationResult} = require('express-validator')
const db = require("../../database/models");

module.exports = async (req, res) => {
    const { about,price,idSpecialty,idKnowledge,skillesInd } = req.body;
    const id = +req.body.idIndividual

    try{
        await db.Individual.update(
            
            {about,price,idSpecialty,idKnowledge,skillesInd},
            { where :  {id :id} }
        );
         
        const projectUpdate = await db.Individual.findByPk(id, {
            include: ['skills']
        });
     
        console.log('Skills:', projectUpdate.skills);
        return res.redirect('/productos/agregarIndividual/'+id)
     
    } catch(error) { 
        console.log(error)
    } 
}
    




        
    
        
