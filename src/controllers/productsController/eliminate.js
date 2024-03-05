const db = require('../../database/models')

module.exports = (req,res) => {
  const projectId = parseInt(req.params.id); // obtiene y convierte el id a numero
  //eliminar el proyecto de la bd,se usa Project .condicion para encontrar el id 

  db.Project.destroy({
    where: {
      id: projectId
    }
  })
  .then(() => {
    res.redirect('/usuarios/perfil')
  })
  .catch(error => console.log(error))
}