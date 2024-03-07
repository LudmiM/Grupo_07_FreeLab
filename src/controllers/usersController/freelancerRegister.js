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
    const file = req.file; // Suponiendo que estás usando multer o similar para subir archivos

    const users = data.leerJSON('usuarios');

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

    const newFreelancer = new Freelancer(firstName, lastName, country, phoneCode, phone, file.filename, about, hourValue);

    users.freelancers.push(newFreelancer);
    data.escribirJSON(users, 'usuarios');

    return res.redirect('/usuarios/ingreso');
  } catch (error) {
    // Maneja los errores aquí
    console.error(error);
    return res.status(500).send("Error interno del servidor");
  }
};
