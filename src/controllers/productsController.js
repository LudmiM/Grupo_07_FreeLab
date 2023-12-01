module.exports = {
    detail: (req,res) => {
        res.render('products/productDetail');
    },
    detailPost: (req,res) => {
        res.render('products/productDetailPost');
    }
}