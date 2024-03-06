// actualizar-laboral.js

const { Freelancer } = require('../../database/models');

module.exports = async (req, res) => {
    const userId = req.session.userLogin.idUser;
    const { about, hourValue, country, phoneCode, phone, idCategory } = req.body;

    try {
        await Freelancer.update(
            { about, hourValue, country, phoneCode, phone, idCategory },
            { where: { idUser: userId } }
        );
        return res.redirect('/profile');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar la información laboral.');
    }
};
