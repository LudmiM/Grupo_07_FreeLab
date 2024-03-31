const db = require('../../database/models');

const getAllProducts = async (req,res) => {
    try {
      const {count, rows} = await db.Project.findAndCountAll({
        include : [
            {
                association : 'skills',
                attributes : ['name'],
                through: { 
                    attributes: [] 
                  }
            }
        ],
        attributes : ['id','title','description']
      })
      

      const projects = rows.map(project => {
        return {
            ...project.dataValues,
            detail : `${req.protocol}://${req.get('host')}/apis/products/${project.id}`
        }
      })

      return res.status(200).json({
        ok : true,
        count,
        projects 
      })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Hubo un error'

        })
    }
}

const getOneProduct = async (req,res) => {
    try {
        const product = await db.Project.findByPk(req.params.id,{
            include : [
                {
                    association : 'skills',
                    attributes : ['name'],
                    through: { 
                        attributes: [] 
                      }
                }
            ],
            attributes : {
                exclude : ['createdAt','updatedAt','idStatus','idCompany']
            }
        })

        const productCustom = {
           
            ...product.dataValues,
            skills: product.skills.map(skill => skill.name).join(', ')
        }
        return res.status(200).json({
            ok: true,
            project : productCustom
        })

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Hubo un error'

        })
    }
}

module.exports = {
    getAllProducts,
    getOneProduct
}

