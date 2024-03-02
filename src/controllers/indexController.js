const { leerJSON } = require("../data");

module.exports = {
    index: (req,res) => {
        //console.log(req.session.userLogin)
        const products= leerJSON('products')
        const postReversed = [...products.servicios].reverse();
        return res.render('index',{
            products:postReversed
        }); 
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
        const { key } = req.query; 
        const products= leerJSON('products')
        res.render('resultado', {
            products: products.servicios.filter(p => p.category.toLowerCase().includes(key.toLowerCase())) || p.firshName.toLowerCase().includes(key.toLowerCase()) || p.lastName.toLowerCase().includes(key.toLowerCase()), key});
    }
}

