const db = require('./../../database/models');

module.exports = async (req,res) => {
  try {
    const id = +req.params.id;
    const u = await db.Freelancer.findOne({
      where: {
        idUser: id
      }
    });
    
    console.log(req.url)
    console.log(u)
    return res.render('products/user-detail', { u });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
}