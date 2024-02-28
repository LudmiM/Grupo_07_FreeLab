const { validationResult } = require("express-validator");
const { Company, User } = require('../../database/models');
const bcryptjs = require('bcryptjs');

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    const { companyName, userEmail, userPassword, companyDescription, location, website } = req.body;

    if (!errors.isEmpty()) {
      return res.render('users/empresaForm', {
        old: req.body,
        errors: errors.array()
      });
    }

    const hashedPassword = await bcryptjs.hash(userPassword, 10);

    const newUser = await User.create({
      email: userEmail,
      password: hashedPassword,
      idRole: 2 // Assuming roleId 2 represents the role of a company
    });

    const newCompany = await Company.create({
      companyName,
      description: companyDescription,
      location,
      website,
      idUser: newUser.id
    });

    return res.redirect('/usuarios/ingreso');

  } catch (error) {
    console.error('Error en el registro de la empresa:', error);
    return res.status(500).send('Error en el servidor');
  }
};
