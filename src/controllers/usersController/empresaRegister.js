const data = require('../../data');
const bcryptjs = require('bcryptjs')

module.exports = (req, res) => {
    const {companyName, employerEmail, employerPassword,employerPhoneCode,employerPhone, companyDescription} = req.body;

    const users = data.leerJSON('usuarios');
  
    const lastId = users.empresas.length > 0 ? parseInt(users.empresas[users.empresas.length - 1].id) : 0;

    const newId = lastId + 1;

    function usuario(companyName, employerEmail, employerPassword,employerPhoneCode,employerPhone, companyDescription){
      this.id = newId;
      this.companyName = companyName;
      this.employerEmail = employerEmail;
      this.employerPassword = bcryptjs.hashSync(employerPassword, 10);;
      this.employerPhoneCode = employerPhoneCode;
      this.employerPhone = employerPhone;
      this.companyDescription = companyDescription;
    }    

    const newUsuario = new usuario(companyName, employerEmail, employerPassword,employerPhoneCode, employerPhone, companyDescription);

    users.empresas.push(newUsuario);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/');

}