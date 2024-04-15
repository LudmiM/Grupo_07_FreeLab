const db = require("../../database/models");

module.exports = async (req, res) => {
    try {
            const idFreelancer = await db.Freelancer.findOne({
                where: {
                    idUser: req.session.userLogin.id
                }
            })
            console.log('Mis dates son '+idFreelancer)
            const projects = await db.Favorite.findAll({
                where: {
                    idFreelancer: idFreelancer.id
                },
                include: [
                    {
                        model: db.Project
                    }
                ]
            });
            console.log('Los prohectos son '+projects)
            res.render('products/guardados', {projects})  
        
    } catch (error) {
        
    }
}