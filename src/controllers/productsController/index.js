const db = require('./../../database/models')
const eliminate = require('./eliminate')
const formProject = require('./formProject')
const updateProduct = require('./updateProduct')
const edit = require('./edit')
const detailPost = require('./detailPost')
const detail = require('./detail')
const addPost = require('./addPost')
const addProject = require('./addProject')
const listadoProducts = require('./listadoProducts')


module.exports = {
    eliminate,
    addPost,
    detail,
    detailPost,
    edit,
    updateProduct,
    formProject,
    listadoProducts,
    addProject
}