const db = require("../../database/models");

module.exports = (req, res) => {
   // if(error.isEmpty()) { 
  const { title,description,idStatus,category,skilles} = req.body;
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
    const newSkills=skilles.map(s => {
      return {
        idProject: project.id,
        idSkill: parseInt(s)
      };
    })
    db.ProjectSkill.bulkCreate(newSkills)
    .then(projectSkill => {
      console.log("Asociación creada:", projectSkill);
    })
    return res.redirect('/usuarios/perfil');
  })
  .catch(error => console.log(error))
}
