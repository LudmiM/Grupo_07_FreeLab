const { validationResult } = require("express-validator");
const { Company, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { companyName, userEmail, userPassword, employerPhoneCode, employerPhone, companyDescription, confirmPassword } = req.body;
  const users = data.leerJSON('usuarios');
  const file = req.file;

  const lastId = users.empresas.length > 0 ? parseInt(users.empresas[users.empresas.length - 1].id) : 0;
  const newId = lastId + 1;
  const empresaRole = 1; // ID del rol de empresa

  function Empresa(companyName, userEmail, userPassword, employerPhoneCode, employerPhone, mainImage, companyDescription) {
    this.id = newId;
    this.companyName = companyName;
    this.userEmail = userEmail;
    this.userPassword = bcryptjs.hashSync(userPassword, 10);
    this.employerPhoneCode = employerPhoneCode;
    this.employerPhone = employerPhone;
    this.mainImage = mainImage;
    this.companyDescription = companyDescription;
    this.idRole = empresaRole; // Asignar el ID del rol de empresa
  }

  if (errors.isEmpty()) {
    const newEmpresa = new Empresa(companyName, userEmail, userPassword, employerPhoneCode, employerPhone, file.filename, companyDescription);

    users.empresas.push(newEmpresa);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/usuarios/ingreso');
  } else {
    return res.render('users/empresaForm', {
      old: req.body,
      errors: errors.mapped()
    });
  }
};