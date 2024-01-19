const data = require('../../data');
const bcryptjs = require('bcryptjs')

module.exports = (req, res) => {
    const {companyName, employerEmail, employerPassword,employerPhoneCode,employerPhone, companyDescription} = req.body;

    const file = req.file; 

    const users = data.leerJSON('usuarios');
  
    const lastId = users.empresas.length > 0 ? parseInt(users.empresas[users.empresas.length - 1].id) : 0;

    const newId = lastId + 1;

    function usuario(companyName, employerEmail, employerPassword,employerPhoneCode,employerPhone,employerImage, companyDescription){
      this.id = newId;
      this.companyName = companyName;
      this.employerEmail = employerEmail;
      this.employerPassword = bcryptjs.hashSync(employerPassword, 10);;
      this.employerPhoneCode = employerPhoneCode;
      this.employerPhone = employerPhone;
      this.employerImage = employerImage;
      this.companyDescription = companyDescription;
    }    

    const newUsuario = new usuario(companyName, employerEmail, employerPassword,employerPhoneCode, employerPhone,file.filename, companyDescription);

    users.empresas.push(newUsuario);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/');

}