const { leerJSON } = require("../data");
const products= leerJSON('products')


module.exports = {
    index: (req,res) => {
        console.log('Hi')
        console.log(req.session.userLogin)
        //console.log(req.session)
        const postReversed = [...products.servicios].reverse();
        /* agregar json de ofertas laborales a futuro */
        return res.render('index',{
            products:postReversed
        }); //return res.render('index');
    },
    card: (req,res) => {
        res.render('productCart');
    },
    admin: (req,res) => {
        
       /* return res.send(products);
        res.render('dashboard');*/
        return res.render('dashboard',{products})
    },
    resultado: (req, res) => {
        const { key } = req.query; // Corregido aquí
        res.render('resultado', {
            products: products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase())), key});
    }/*,
    //Reversion
    resultado: (req, res) => {
        const { key } = req.query; // Corregido aquí
        //debe retornar solo el producto
        res.render('resultado', {
            products: products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase())), key});
    }*/
}

