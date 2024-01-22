const { leerJSON } = require("../data");
const products= leerJSON('products')


module.exports = {
    index: (req,res) => {
        console.log(req.session.userLogin)
        const postReversed = [...products.servicios].reverse();

        return res.render('index',{
            products:postReversed
        }); 
    },
    card: (req,res) => {
        res.render('productCart');
    },
    admin: (req,res) => {
        

        return res.render('dashboard',{products})
    },
    resultado: (req, res) => {
        const { key } = req.query; // Corregido aquí
        res.render('resultado', {
            products: products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase())), key});
    }

}

