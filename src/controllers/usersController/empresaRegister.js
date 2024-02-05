const data = require('../../data');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

module.exports =  (req, res) => {
  const errors = validationResult(req);
    const { companyName, userEmail, userPassword, employerPhoneCode, employerPhone, companyDescription, confirmPassword } = req.body;

    const users = data.leerJSON('usuarios');
    const file = req.file;

    const lastId = users.empresas.length > 0 ? parseInt(users.empresas[users.empresas.length - 1].id) : 0;
    const newId = lastId + 1;
    const empresa = "empresa";

    function usuario(companyName, userEmail, userPassword, employerPhoneCode, employerPhone, employerImage, companyDescription) {
      this.id = newId;
      this.companyName = companyName;
      this.userEmail = userEmail;
      this.userPassword = bcryptjs.hashSync(userPassword, 10);
      this.employerPhoneCode = employerPhoneCode;
      this.employerPhone = employerPhone;
      this.employerImage = employerImage;
      this.companyDescription = companyDescription;
      this.rol = empresa;
    }
    if(errors.isEmpty()){
      const newUsuario = new usuario(companyName, userEmail, userPassword, employerPhoneCode, employerPhone, file.filename, companyDescription);

      users.empresas.push(newUsuario);
      data.escribirJSON(users, 'usuarios');
      return res.redirect('/usuarios/ingreso');
    }else{
      return res.render('users/empresaForm',{
          old : req.body,
          errors : errors.mapped()
      })
}
};
