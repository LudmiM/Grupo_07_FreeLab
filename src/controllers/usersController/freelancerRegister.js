const { validationResult } = require("express-validator");

const  db  = require('../../database/models');

module.exports = async (req, res, userId) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('users/freelancerForm', {
        old: req.body,
        errors: errors.mapped()
      });
    }
    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })

    const freelancer = await db.Freelancer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      mainImage: req.body.mainImage,
      phoneCode: req.body.phoneCode,
      phone: req.body.phone,
      about: req.body.about,
      hourValue: req.body.hourValue,
      idUser: user.id,
    });

    return res.redirect('/usuarios/ingreso');
  } catch (error) {
    console.error("Error en freelancerRegister:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

