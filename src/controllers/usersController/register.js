// registerController.js

const User = require('../../database/models/user'); // Suponiendo que tienes un modelo de usuario

module.exports = async (req, res) => {
    try {
        // Extraer los datos del cuerpo de la solicitud
        const { userEmail, userPassword, confirmPassword, userType } = req.body;

        // Verificar si las contraseñas coinciden
        if (userPassword !== confirmPassword) {
            return res.status(400).json({ error: 'Las contraseñas no coinciden' });
        }

        // Determinar el role id basado en el tipo de usuario
        let roleId;
        if (userType === 'freelancer') {
            roleId = 2; // Supongamos que el rol de freelancer tiene un id de 2
        } else if (userType === 'empresa') {
            roleId = 1; // Supongamos que el rol de empresa tiene un id de 1
        } else {
            return res.status(400).json({ error: 'Tipo de usuario no válido' });
        }

        // Crear un nuevo usuario con el role id correspondiente
        const newUser = new User({
            email: userEmail,
            password: userPassword,
            roleId: roleId
        });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        // Redirigir al usuario a una página de éxito o cualquier otra página necesaria
        res.redirect('/registroExitoso');
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud' });
    }
};
