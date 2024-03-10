const { validationResult } = require("express-validator");
const { Freelancer, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { freelancerFirstname, freelancerLastname, userEmail, userPassword, freelancerPhoneCode, freelancerPhone, freelancerSkills, confirmPassword } = req.body;
  const users = data.leerJSON('usuarios');
  const file = req.file;

  const lastId = users.freelancers.length > 0 ? parseInt(users.freelancers[users.freelancers.length - 1].id) : 0;
  const newId = lastId + 1;
  const freelancerRole = 2; // ID del rol de freelancer

  function Freelancer(freelancerFirstname, freelancerLastname, userEmail, userPassword, freelancerPhoneCode, freelancerPhone, mainImage, freelancerSkills) {
    this.id = newId;
    this.freelancerFirstname = freelancerFirstname;
    this.freelancerLastname = freelancerLastname;
    this.userEmail = userEmail;
    this.userPassword = bcryptjs.hashSync(userPassword, 10);
    this.freelancerPhoneCode = freelancerPhoneCode;
    this.freelancerPhone = freelancerPhone;
    this.mainImage = mainImage;
    this.freelancerSkills = freelancerSkills;
    this.idRole = freelancerRole; // Asignar el ID del rol de freelancer
  }

  if (errors.isEmpty()) {
    const newFreelancer = new Freelancer(freelancerFirstname, freelancerLastname, userEmail, userPassword, freelancerPhoneCode, freelancerPhone, file.filename, freelancerSkills);

    users.freelancers.push(newFreelancer);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/usuarios/ingreso');
  } else {
    return res.render('users/freelancerForm', {
      old: req.body,
      errors: errors.mapped()
    });
  }
};