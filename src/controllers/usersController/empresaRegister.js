const { validationResult } = require("express-validator");
const db = require('../../database/models');

module.exports = async (req, res, userId) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('users/empresaForm', {
        old: req.body,
        errors: errors.mapped()
      });
    
    }
 const userEmail = req.body.email
console.log("userEmail", userEmail);

    console.log("aca hay algo " + req.body.email)
    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    console.log("mostrar" + user)
    const company = await db.Company.create({
      companyName: req.body.companyName,
      description: req.body.companyDescription,
      location: req.body.location,
      mainImage: req.body.empresaImage,
      website: req.body.website,

      idUser: user.id

    });

    return res.redirect('/usuarios/ingreso');
  } catch (error) {
    console.error("Error en empresaRegister:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
