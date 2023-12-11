const { leerJSON } = require("../data");

module.exports = {
    index: (req,res) => {
        res.render('index'); //return res.render('index');
    },
    card: (req,res) => {
        res.render('productCart');
    },
    admin: (req,res) => {
        const products= leerJSON('products')
       /* return res.send(products);
        res.render('dashboard');*/
        return res.render('dashboard',{products}) 
    }
}