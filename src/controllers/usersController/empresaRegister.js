const { validationResult } = require("express-validator");
const { Company, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    const { companyName, userEmail, userPassword, description, location, website } = req.body;

    if (errors.isEmpty()) {
      // Cifra la contraseña utilizando bcryptjs
      const hashedPassword = await bcryptjs.hash(userPassword, 10);

      // Crea un nuevo usuario en la base de datos
      const newUser = await User.create({
        email: userEmail,
        password: hashedPassword,
        role: 'company' // Asigna el rol como 'company'
      });

      // Crea una nueva empresa en la base de datos
      const newCompany = await Company.create({
        companyName,
        description,
        location,
        website,
        userId: newUser.id
      });

      // Redirige al usuario a la página de inicio de sesión después del registro exitoso
      return res.redirect('/usuarios/ingreso');
    } else {
      // Si hay errores de validación, renderiza el formulario de registro de empresa con los errores
      return res.render('users/empresaForm', {
        old: req.body,
        errors: errors.array()
      });
    }
  } catch (error) {
    // Captura cualquier error y envía un mensaje de error al cliente
    console.error('Error en el registro de la empresa:', error);
    return res.status(500).send('Error en el servidor');
  }
};
