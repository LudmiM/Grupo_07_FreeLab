const db = require('./../../database/models');

module.exports = async (req,res) => {
    try {
        const id = +req.params.id;
        const p = await db.Project.findByPk(id);
        return res.render('products/project-detail',{p})
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
}