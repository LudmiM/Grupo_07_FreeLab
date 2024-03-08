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

    const { companyName, location, companyDescription } = req.body;
    const file = req.file;

    const users = data.leerJSON('usuarios');

    const lastId = users.empresas.length > 0 ? parseInt(users.empresas[users.empresas.length - 1].id) : 0;
    const newId = lastId + 1;
    const empresaRole = 1;

    function Empresa(companyName, location, mainImage, companyDescription) {
      this.id = newId;
      this.companyName = companyName;
      this.location = location;
      this.mainImage = mainImage;
      this.companyDescription = companyDescription;
      this.idRole = empresaRole;
    }

    const newEmpresa = new Empresa(companyName, location, file.filename, companyDescription);

    users.empresas.push(newEmpresa);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/usuarios/ingreso');
  } catch (error) {

    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
