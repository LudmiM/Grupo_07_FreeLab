const {leerJSON} = require('./../../data');

module.exports = (req, res) => {

  const codN = leerJSON('cod-number');

    if (req.session){
      if(req.session.userLogin.rol === "freelancer"){
        const adicionales = leerJSON('products').servicios.find((p) => p.id === req.session.userLogin.id);  
        const {freelancerFirstname,freelancerLastname,freelancerPhoneCode,freelancerPhone} = leerJSON('usuarios').freelancers.find((p) => p.id === req.session.userLogin.id);
        
        return res.render('users/profile-edit', { ...adicionales, freelancerFirstname,freelancerLastname,freelancerPhoneCode,freelancerPhone,codN });  
      }else{
        //const adicionales = leerJSON('products').publicaciones.find((p) => p.id === req.session.userLogin.id);  
        /*
        const {companyName,employerPhoneCode,employerPhone,companyDescription} = leerJSON('usuarios').empresas.find((p) => p.id === req.session.userLogin.id);
        return res.render('users/profile-edit', { /*...adicionales,*/// companyName,employerPhoneCode,employerPhone,companyDescription });
        //*/
        console.log('HIII')
      }
    }else{
      return res.render('/');
    }
}