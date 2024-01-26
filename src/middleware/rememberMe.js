module.exports = (req, res, next) => {
    // Verifica si la cookie 'remember' está presente
    const rememberCookie = req.cookies.remember;
    
    if (rememberCookie) {
        // Si la cookie existe, realiza la lógica para autenticar al usuario
        const users = leerJSON('usuarios');
        const user = users.find(u => u.email === rememberCookie.email && u.password === rememberCookie.password);

        if (user) {
            // Autentica al usuario
            req.user = user;
        }
    }
    
    next();
};
