const db = require("../../database/models");

module.exports = async (req, res) => {
    try {
            const idFreelancer = await db.Freelancer.findOne({
                where: {
                    idUser: req.session.userLogin.id
                }
            })
            const p = await db.Favorite.findAll({
                where: {
                    idFreelancer: idFreelancer.id
                },
                include: [
                    {
                        model: db.Project
                    }
                ]
            });
            res.render('products/favorites', {p})  
        
    } catch (error) {
        
    }
}