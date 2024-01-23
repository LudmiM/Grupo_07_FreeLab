const data = require('../../data');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { registerValidationRules, validate } = require('../../validations/registerValidation');

module.exports = [
  registerValidationRules(),
  validate,
  (req, res) => {
    const {
      freelancerFirstname,
      freelancerLastname,
      userEmail,
      userPassword,
      freelancerPhoneCode,
      freelancerPhone,
      freelancerSkills,
      confirmPassword
    } = req.body;

    const users = data.leerJSON('usuarios');
    const file = req.file;

    const lastId = users.freelancers.length > 0 ? parseInt(users.freelancers[users.freelancers.length - 1].id) : 0;
    const newId = lastId + 1;
    const freelancerRole = "freelancer";

    function FreelancerUser(freelancerFirstname, freelancerLastname, userEmail, userPassword, freelancerPhoneCode, freelancerPhone, freelancerImage, freelancerSkills) {
      this.id = newId;
      this.freelancerFirstname = freelancerFirstname;
      this.freelancerLastname = freelancerLastname;
      this.userEmail = userEmail;
      this.userPassword = bcryptjs.hashSync(userPassword, 10);
      this.freelancerPhoneCode = freelancerPhoneCode;
      this.freelancerPhone = freelancerPhone;
      this.freelancerImage = freelancerImage;
      this.freelancerSkills = freelancerSkills;
      this.rol = freelancerRole;
    }

    const newFreelancerUser = new FreelancerUser(
      freelancerFirstname,
      freelancerLastname,
      userEmail,
      userPassword,
      freelancerPhoneCode,
      freelancerPhone,
      file.filename,
      freelancerSkills
    );

    // Agregar el nuevo usuario freelancer a la lista de freelancers
    users.freelancers.push(newFreelancerUser);

    // Guardar la información en el archivo JSON
    data.escribirJSON(users, 'usuarios');

    // Redirigir a la página de ingreso (o a donde desees)
    return res.redirect('/usuarios/ingreso');
  }
];
