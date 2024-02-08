function datosParaSession(usuarios,email) {

    const empresa = usuarios.empresas.find(e => e.userEmail.toLowerCase() === email.trim().toLowerCase());
    const freelancer = usuarios.freelancers.find(f => f.userEmail.toLowerCase() === email.trim().toLowerCase());
    const {id,rol,userEmail,mainImage} = empresa || freelancer
    
    //console.log(id,rol,userEmail + 'Son lo datos')
    return  {id, rol, userEmail, mainImage};
}

module.exports = datosParaSession;
