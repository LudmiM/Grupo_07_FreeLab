const data = require('../../data');
const bcryptjs = require('bcryptjs');

module.exports = (req, res) => {
    const {freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone, freelancerSkills} = req.body;

    const users = data.leerJSON('usuarios');

    const file = req.file;
  
    const lastId = users.freelancers.length > 0 ? parseInt(users.freelancers[users.freelancers.length - 1].id) : 0;

    const newId = lastId + 1;

    function usuario(freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone,freelancerImage, freelancerSkills){
      this.id = newId;
      this.freelancerFirstname = freelancerFirstname;
      this.freelancerLastname = freelancerLastname;
      this.freelancerEmail = freelancerEmail;
      this.freelancerPassword = bcryptjs.hashSync(freelancerPassword, 10);
      this.freelancerPhoneCode = freelancerPhoneCode
      this.freelancerPhone = freelancerPhone;
      this.freelancerImage = freelancerImage;
      this.freelancerSkills = freelancerSkills;
    }    

    const newUsuario = new usuario(freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone,file.filename, freelancerSkills);

    users.freelancers.push(newUsuario);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/');

}