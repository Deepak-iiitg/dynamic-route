
function getProduct(req,res,next){
    res.render('product-page.ejs',{});
    res.redirect('/');     
}
function productNotFound(req,res,next){
    res.render('404.ejs',{})
}
module.exports = {getProduct,productNotFound};