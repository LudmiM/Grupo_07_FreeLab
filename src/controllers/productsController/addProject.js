const db = require("../../database/models");

module.exports = (req, res) => {
   // if(error.isEmpty()) { 
  const { title,description,idStatus,idCompany,price,category} = req.body;
  
  
  db.Project.create({
    title,
    description,
    idStatus,
    idCompany,
    price,
    category,
    createAt : new Date,
    updateAt : new Date
  })
  .then(project => {
    console.log(project);
    return res.redirect('/usuarios/perfil');
  })
  .catch(error => console.log(error))
}

 //}

   // const publications = data.leerJSON('publications');
    
    // const lastId = publications.length > 0 ? parseInt(publications[publications.length - 1].id) : 0;

    // Crear un nuevo id consecutivo
   // const newId = lastId + 1;
  
    //function project(title, description,category, price) {
   //   this.id = newId; // No convertir a cadena para que sea un número
   //   this.title = title;
   //   this.description = description;
   //   this.category = category;
   //   this.price = price;
   //   this.idUser = idUser;
   // }
  
   /* const newproject = new project(title, description, category, price,idUser);

    publications.push(newproject);
    data.escribirJSON(publications, 'publications');
  
    res.redirect('/usuarios/perfil');
  } */