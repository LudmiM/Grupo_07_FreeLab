const { leerJSON, escribirJSON } = require('./../../data');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    
    const datos = leerJSON('usuarios');

    if ("freelancer" === req.session.userLogin.rol) {
        const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
        
        const freelancer =(p) => {
            if (p.id === req.session.userLogin.id) {
                //p.id = p.id;
                p.name = name ? name.trim() : p.name;
                p.description = description ? description.trim() : p.description;
                p.skills = skills ? skills.trim() : p.skills;
                p.portfolio = portfolio ? portfolio.trim() : p.portfolio;
                p.redes_sociales = redes_sociales ? redes_sociales.trim() : p.redes_sociales;
                p.category = category ? category.trim() : p.category;
                p.price = price ? price.trim() : p.price;
                p.currency = currency ? currency.trim() : p.currency;

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
            return p;
        }
        datos.empresas = datos.empresas.map(empresa);
    }
    
    escribirJSON(datos, 'products');

    return res.redirect('/usuarios/perfil')

}
