const db = require("../../database/models");

module.exports = (req, res) => {
   // if(error.isEmpty()) { 
  const { title,description,idStatus,category,skilles} = req.body;
  const idCompany = req.session.idCompany;
  const formData = req.body;

    console.log("Datos enviados desde el formulario:", formData);
    
    res.send('Datos recibidos correctamente', formData);
 }
