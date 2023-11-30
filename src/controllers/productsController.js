module.exports = {
    detail: (req,res) => {
        res.render('/products/productDetail');
    },
    detailPost: (req,res) => {
        read.render('products/productDetailPost');
    }
}