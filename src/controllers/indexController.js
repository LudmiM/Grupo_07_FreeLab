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
            const optionType = req.params.optionType;
            console.log(optionType)
            if (optionType){
                console.log('wiii wntreee')
            if(optionType == 'Proyectos'){
                const projects = await db.Project.findAll({
                    order: [['idCompany', 'ASC'], ['createdAt', 'DESC']]
                });
                return res.render('dashboard', {
                    projects
                });
            } else if(optionType == 'Freelancers'){
                const freelancers = await db.Freelancer.findAll({
                });
                return res.render('dashboard', {
                    freelancers
                });
            } else{
                const empresas = await db.Company.findAll({
                });
                return res.render('dashboard', {
                    empresas
                });
           }
        }else{
            console.log('nohay nada ahi')
            const projects = await db.Project.findAll({
                order: [['idCompany', 'ASC'], ['createdAt', 'DESC']]
            });
            return res.render('dashboard', {
                projects
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
    newsletter: (req,res) => {
        const emailNewsletter = req.body.emailNewsletter;
        console.log('El email ingresado es '+emailNewsletter)
        //Llamar y crear la tabla para newsletter
        res.redirect('/');
    }
}
