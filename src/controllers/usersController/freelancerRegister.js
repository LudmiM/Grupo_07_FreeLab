const { validationResult } = require("express-validator");
const data = require('../../data');
const { Freelancer, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('users/freelancerForm', {
        old: req.body,
        errors: errors.mapped()
      });

    }
    const email = req.body.email.trim().toLowerCase();
    console.log('muestro le amil')
    console.log(email)
    //Aca busca el user y cargalo ala bbdd

    return res.redirect('/usuarios/ingreso');
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
