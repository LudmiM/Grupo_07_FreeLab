const {validationResult} = require('express-validator')
const db = require("../../database/models");

module.exports = async (req, res) => {
    const { title, description,skills } = req.body;
    const id = +req.params.id;

    try{
        await db.Project.update(
            
            {title, description},
            { where :  {id :id}   }
    );
         
     const projectUpdate = await db.Project.findByPk(id, {
        include: ['skills']
     });
     
     console.log('Skills:', projectUpdate.skills);
        return res.redirect('/usuarios/perfil')
     
 } catch(error) { 
     console.log(error)
} 

}
    




        
    
        
