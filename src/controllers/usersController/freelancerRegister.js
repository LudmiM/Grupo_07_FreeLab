const data = require('../../data');
const bcryptjs = require('bcryptjs');

module.exports = (req, res) => {
    const {freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone, freelancerSkills} = req.body;

    const users = data.leerJSON('usuarios');
  
    const lastId = users.freelancers.length > 0 ? parseInt(users.freelancers[users.freelancers.length - 1].id) : 0;

    const newId = lastId + 1;

    function usuario(freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone, freelancerSkills){
      this.id = newId;
      this.freelancerFirstname = freelancerFirstname;
      this.freelancerLastname = freelancerLastname;
      this.freelancerEmail = freelancerEmail;
      this.freelancerPassword = bcryptjs.hashSync(freelancerPassword, 10);
      this.freelancerPhone = freelancerPhone;
      this.freelancerPhoneCode = freelancerPhoneCode
      this.freelancerSkills = freelancerSkills;
    }    

    const newUsuario = new usuario(freelancerFirstname, freelancerLastname, freelancerEmail, freelancerPassword,freelancerPhoneCode,freelancerPhone, freelancerSkills);

    users.freelancers.push(newUsuario);
    data.escribirJSON(users, 'usuarios');
    return res.redirect('/');

}