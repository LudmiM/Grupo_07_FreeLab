const db = require('./../database/models');
module.exports = async (req, res, next) => {
    try {
        const categories = await db.Category.findAll();
        res.locals.categories = categories;
        next();
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
        next(error); 
    }
};