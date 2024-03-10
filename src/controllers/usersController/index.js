const login = require('./login')

const register = require('./register')
const process_register = require('./process_register')
const freelancerRegister = require('./freelancerRegister')
const empresaRegister = require('./empresaRegister')

const logout = require('./logout')
const actualizarLaboral = require('./actualizar-laboral')
const actualizarPersonal = require('./actualizar-personal')

const profile = require('./profile-edit')
const process_login = require('./process_login')

module.exports = {
    register,
    process_register,
    process_login,
    login,
    freelancerRegister,
    empresaRegister,
    profile,
    logout,
    actualizarLaboral,
    actualizarPersonal
}