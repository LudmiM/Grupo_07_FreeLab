const db = require('./../../database/models')

module.exports = async (req, res) => {
    const idUser = req.session.userLogin.idUser;
    //Pedir code of form
    try {
        if (codeForm === 1) {
            const { about, hourValue, country, phoneCode, phone, idCategory } = req.body;
            await Freelancer.update(
                { about, hourValue, country, phoneCode, phone, idCategory },
                { where: { idUser: idUser } }
            );
        }else{
            const { about, hourValue, country, phoneCode, phone, idCategory } = req.body;
            await Freelancer.update(
                { about, hourValue, country, phoneCode, phone, idCategory },
                { where: { idUser: idUser } }
            );
        }
        return res.redirect('/profile');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar la información laboral.');
    }
};
