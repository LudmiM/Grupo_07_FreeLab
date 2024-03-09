const db = require('./../database/models');
module.exports = async (req, res, next) => {
    try {
        // Aquí cargas las categorías desde tu base de datos o desde donde sea que estén almacenadas
        const categories = await db.Category.findAll();
        
        // Agregas las categorías a res.locals para que estén disponibles en todas las vistas
        res.locals.categories = categories;
        
        // Llama a next() para pasar el control al siguiente middleware o a la ruta
        next();
    } catch (error) {
        // Maneja cualquier error que ocurra durante la carga de las categorías
        console.error('Error al cargar las categorías:', error);
        next(error); // Pasa el error al siguiente middleware de manejo de errores
    }
};