const db = require('./../../database/models')

module.exports = (req, res) => {

    if (req.session.userLogin.idRole === 2) {
        const { firstName, lastName, about } = req.body;

        db.Freelancer.findOne({ where: { idUser: req.session.userLogin.id } })
            .then(f => {
                console.log(f)
                f.update({
                    firstName: firstName ? firstName.trim() : f.firstName,
                    lastName: lastName ? lastName.trim() : f.lastName,
                    about: about ? about : f.about
                })
            })
    } else {
        const { companyName, description } = req.body;

        db.Company.findOne({ where: { idUser: req.session.userLogin.id } })
            .then(c => {
                if (c) {
                    c.update({
                        companyName: companyName ? companyName.trim() : c.companyName,
                        description: description ? description.trim() : c.description
                    })
                }
            })
    }
    return res.redirect('/usuarios/perfil')
} 
