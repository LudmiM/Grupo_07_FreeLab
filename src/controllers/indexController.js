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