module.exports = (req, res, next) => {
    if (req.session && req.session.userLogin) {
        res.locals.userLogin = req.session.userLogin;
    }

    next();
};
