// controllers/users/register.js


module.exports = (req, res) => {

      // Si hay errores de validación, renderiza la vista del formulario de registro con los errores
    res.render('users/register');
};
