const db = require('./../database/models');
const { Op } = require('sequelize');

module.exports = {
    index: async (req, res) => {
        try {
            const projects = await db.Project.findAll({
                order: [['createdAt', 'DESC']], 
                limit: 5 
            });
            return res.render('index', {
                projects
            });
        } catch (error) {
            console.error("Error al obtener los proyectos:", error);
            return res.status(500).send("Error al obtener los proyectos");
        }
    },
    card: (req,res) => {
        res.render('productCart');
    },
    admin: async (req,res) => {
        try {
            const {optionType} = req.query;
            console.log('this is option'+optionType)
            switch (optionType) {
                case 'Empresas':
                    const empresas = await db.Company.findAll({
                    });
                    return res.render('dashboard', {
                        empresas, optionType
                    });
                case 'Freelancers':
                    const freelancers = await db.Freelancer.findAll({
                    });
                    return res.render('dashboard', {
                        freelancers, optionType
                    });
                default:
                    const projects = await db.Project.findAll({
                        order: [['idCompany', 'ASC'], ['createdAt', 'DESC']]
                    });
                    return res.render('dashboard', {
                        projects, optionType
                    });
            }
        } catch (error) {
            console.error("Error al obtener los proyectos:", error);
            return res.status(500).send("Error al obtener los datos");
        }
    },
    search :(req, res) => {
        const { key } = req.query

        db.Project.findAll({
          where:{
            title:{[Op.substring] : key
            }
          },
          //include:["categories"]
        })
        .then(projects=>{
          return res.render("listado",{projects,key})
        })
    },
    listProjects:{
        //Falta funcionalidad
    },
    newsletter: async (req,res) => {
        try {
            const emailNewsletter = req.body.emailNewsletter;
            if(emailNewsletter){
                await db.Newsletter.create({
                    email: emailNewsletter,                    
                    createdAt : new Date(),
                    updatedAt : new Date()
                })
            }
            res.redirect('/');
        } catch (error) {
            console.log(error)
        }
    }
}
