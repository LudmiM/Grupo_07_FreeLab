const login = require('./login')

const register = require('./register')
const process_register = require('./process_register')
const freelancerRegister = require('./freelancerRegister')
const empresaRegister = require('./empresaRegister')

const logout = require('./logout')
const actualizarExtras = require('./actualizar-extras')
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
    actualizarExtras,
    actualizarPersonal
}