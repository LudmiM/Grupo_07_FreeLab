module.exports = {
    detail: (req,res) => {
        res.render('products/productDetail');
    },
    detailPost: (req,res) => {
        res.render('products/productDetailPost');
    },
    edit : (req,res) => {
        return res.render('products/product-edit')
    }
}