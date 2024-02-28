const { validationResult } = require('express-validator');
const { User } = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/profile-edit', {
                errors: errors.array(),
                data: req.body
            });
        }

        const { id } = req.session.userLogin;
        const userData = req.body;

        await User.update(userData, { where: { id } });

        return res.redirect('/usuarios/perfil');
    } catch (error) {
        console.error('Error al actualizar datos personales:', error);
        return res.status(500).send('Error en el servidor');
    }
};
