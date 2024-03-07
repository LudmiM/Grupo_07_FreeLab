const db = require('./../database/models');
const { hashSync } = require('bcryptjs');
module.exports = {
    index: async (req, res) => {
        try {
            const c = 'freelab123'

            console.log(hashSync(c, 10));
            console.log(hashSync('freelab123', 10))
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
    admin: (req,res) => {
        //const products= leerJSON('products')
       /* return res.send(products);
        res.render('dashboard');*/
        return res.render('dashboard')//,{products})
    },
    resultado: (req, res) => {
        /*
        const { key } = req.query; 
        const products= leerJSON('products')
        res.render('resultado', {
            products: products.servicios.filter(p => p.category.toLowerCase().includes(key.toLowerCase())) || p.firshName.toLowerCase().includes(key.toLowerCase()) || p.lastName.toLowerCase().includes(key.toLowerCase()), key});
    */
    }
}

//console.log(req.url)
/*Buscador de leandro 

search :(req, res) => {
    const { keyword } = req.query

    db.Product.findAll({
      where:{
        name:{[Op.substring] : keyword

        }

      },
      include:["categories"]
    })
    .then(products=>{
      return res.render("index",{products,keyword,user:req.session.userLogin})
    })


  }
*/