function datosParaSession(usuarios,email) {

    const empresa = usuarios.empresas.find(e => e.userEmail.toLowerCase() === email.trim().toLowerCase());
    const freelancer = usuarios.freelancers.find(f => f.userEmail.toLowerCase() === email.trim().toLowerCase());
    return {id, rol, email, mainImage} = empresa || freelancer 
}

module.exports = datosParaSession;
