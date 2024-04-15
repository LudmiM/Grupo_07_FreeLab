const db = require("../../database/models");

module.exports = async (req, res) => {
    try {
            const idFreelancer = await db.Freelancer.findOne({
                where: {
                    idUser: req.session.userLogin.id
                }
            })
            const individuals = await db.Application.findAll({
                where: {
                    idFreelancer: idFreelancer.id
                },
                include: [
                    {
                        model: db.Individual
                    }
                ]
            });
            
            res.render('products/aplicaciones', {individuals})  
        
    } catch (error) {
        
    }
}