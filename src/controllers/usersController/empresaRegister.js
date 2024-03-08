const { validationResult } = require("express-validator");
const data = require('../../data');
const { Company, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('users/empresaForm', {
        old: req.body,
        errors: errors.mapped()
      });
    }
    //aca igual agrega la consulta y agrega

    return res.redirect('/usuarios/ingreso');
  } catch (error) {

    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
