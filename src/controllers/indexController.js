const db = require('./../database/models');

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
    newsletter: (req,res) => {
        const emailNewsletter = req.body.emailNewsletter;
        console.log('El email ingresado es '+emailNewsletter)
        const volver = req.url;
        res.redirect(`${volver}`);
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
        const { keyword } = req.query
    
        db.Project.findAll({
          where:{
            name:{[Op.substring] : keyword
            }
          },
          include:["categories"]
        })
        .then(projects=>{
          return res.render("listadoProductos",{projects,keyword})
        })
    },
    listProducts:{

    }
}
