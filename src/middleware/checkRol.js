module.exports = {
    admin: (req, res, next) => {
        if (req.session.userLogin && req.session.userLogin.rol === 'admin') {
            return next();
        } else if (req.session.userLogin && (req.session.userLogin.rol === 'freelancer' || req.session.userLogin.rol === 'empresa')) {
            return res.redirect('/');
        } else {
            return res.redirect('/usuarios/ingreso');
        }
    },
    logged: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.rol === 'freelancer' || req.session.userLogin.rol === 'empresa' || req.session.userLogin.rol === 'admin')) {
            return next();
        }
        return res.redirect('/usuarios/ingreso');
    },
    freelancer: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.rol === 'admin' || req.session.userLogin.rol === 'freelancer')) {
            return next();
        } else if (req.session.userLogin && req.session.userLogin.rol === 'empresa') {
            return res.redirect('/');
        } else {
            return res.redirect('/usuarios/ingreso');
        }
    },
    empresa: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.rol === 'admin' || req.session.userLogin.rol === 'empresa')) {
            return next();
        } else if (req.session.userLogin && req.session.userLogin.rol === 'freelancer') {
            return res.redirect('/');
        } else {
            return res.redirect('/usuarios/ingreso');
        }
    },
    loggedAdmin: (req, res, next) => {
        if (req.session.userLogin && (req.session.userLogin.rol === 'freelancer')) {
            return next();
        } else {
            return res.redirect('/usuarios/ingreso');
        }
    }
}
