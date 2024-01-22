const login = require('./login')
const register = require('./register')
const formRegister = require('./formRegister')
const freelancerRegister = require('./freelancerRegister')
const empresarRegister = require('./empresaRegister')
const logout = require('./logout')
const actualizarLaboral = require('./actualizar-laboral')

const profile = require('./profile-edit')
const process_login = require('./process_login')

module.exports = {
    register,
    process_login,
    login,
    formRegister,
    freelancerRegister,
    empresarRegister,
    profile,
    logout,
    actualizarLaboral
}