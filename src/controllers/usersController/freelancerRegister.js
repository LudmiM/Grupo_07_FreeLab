const { validationResult } = require("express-validator");
const { Freelancer, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    // Validar los datos del formulario
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, mostrar el formulario nuevamente con los errores
      return res.render('users/freelancerForm', {
        old: req.body,
        errors: errors.array()
      });
    }

    // Extraer datos del cuerpo de la solicitud
    const { freelancerFirstname, freelancerLastname, userEmail, userPassword, freelancerPhoneCode, freelancerPhone, freelancerkills } = req.body;

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await bcryptjs.hash(userPassword, 10);

    // Crear un nuevo usuario con el rol 'freelancer'
    const newUser = await User.create({
      email: userEmail,
      password: hashedPassword,
      role: 'freelancer'
    });

    // Crear un nuevo freelancer asociado al usuario
    const newFreelancer = await Freelancer.create({
      firstName: freelancerFirstname,
      lastName: freelancerLastname,
      email: userEmail,
      phoneCode: freelancerPhoneCode,
      phone: freelancerPhone,
      about: freelancerkills,
      userId: newUser.id
    });

    // Redirigir al usuario a alguna página después del registro exitoso
    return res.redirect('/usuarios/ingreso');
  } catch (error) {
    // Capturar y manejar errores
    console.error('Error en el registro del freelancer:', error);
    return res.status(500).send('Error en el servidor');
  }
};
