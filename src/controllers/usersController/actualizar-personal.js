const { leerJSON, escribirJSON } = require('./../../data');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    
    const datos = leerJSON('usuarios');

    if ("freelancer" === req.session.userLogin.rol) {
        const { freelancerFirstname,freelancerLastname,freelancerPhoneCode,freelancerPhone } = req.body;
        
        const freelancer =(p) => {
            if (p.id === req.session.userLogin.id) {
                p.freelancerFirstname = freelancerFirstname ? freelancerFirstname.trim() : p.freelancerFirstname;
                p.freelancerLastname = freelancerLastname ? freelancerLastname.trim() : p.freelancerLastname;
                p.freelancerPhoneCode = freelancerPhoneCode ? freelancerPhoneCode.trim() : p.freelancerPhoneCode;
                p.freelancerPhone = freelancerPhone ? freelancerPhone.trim() : p.freelancerPhone;
                //p.mainImage  = mainImage  ? mainImage : p.mainImage ;
            }
            return p;
        };
        datos.freelancers = datos.freelancers.map(freelancer);
    }else{
        const {companyName,employerPhoneCode,employerPhone,companyDescription} = req.body;
        
        const empresa = (e)=>{
            if (e.id === req.session.userLogin.id) {
                //e.id = e.id;
                e.companyName = companyName ? companyName.trim() : e.companyName;
                e.employerPhoneCode = employerPhoneCode ? employerPhoneCode.trim() : e.employerPhoneCode;
                e.employerPhone = employerPhone ? employerPhone.trim() : e.employerPhone;
                e.companyDescription = companyDescription ? companyDescription.trim() : e.companyDescription;
            }
            return e;
        }
        datos.empresas = datos.empresas.map(empresa);
    }
    escribirJSON(datos, 'usuarios');
    console.log('voy a redireccionar a /usuarios/perfil')
    return res.redirect('/usuarios/perfil')

}
