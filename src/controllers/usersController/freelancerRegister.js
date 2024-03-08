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

    const { firstName, lastName, country, phoneCode, phone, about, hourValue } = req.body;
    const file = req.file;

    const users = data.leerJSON('usuarios');

    const lastId = users.freelancers.length > 0 ? parseInt(users.freelancers[users.freelancers.length - 1].id) : 0;
    const newId = lastId + 1;
    const freelancerRole = 2;

    function Freelancer(firstName, lastName, country, phoneCode, phone, mainImage, freelancerSkills) {
      this.id = newId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.phoneCode = phoneCode;
      this.phone = phone;
      this.mainImage = mainImage;
      this.freelancerSkills = freelancerSkills;
      this.idRole = freelancerRole;
    }

    const newFreelancer = new Freelancer(firstName, lastName, country, phoneCode, phone, file.filename, about, hourValue);

    users.freelancers.push(newFreelancer);
    data.escribirJSON(users, 'usuarios');

    return res.redirect('/usuarios/ingreso');
  } catch (error) {

    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
