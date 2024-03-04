const db = require("../../database/models");

module.exports = (req, res) => {
   // if(error.isEmpty()) { 
  const { title,description,idStatus,category} = req.body;
  const idCompany = req.session.idCompany;

  db.Project.create({
    title,
    description,
    idStatus,
    idCompany,
    category,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(project => {
    console.log(project);
    return res.redirect('/usuarios/perfil');
  })
  .catch(error => console.log(error))
}
