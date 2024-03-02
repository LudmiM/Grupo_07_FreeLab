const db = require('./../../database/models')
const {leerJSON} = require('./../../data');

module.exports = async (req, res) => {

  try {
    if (req.session) {
      if (req.session.userLogin.idRole == 2) {
        //const freelancer = await db.Freelancer.findByPk(req.session.userLogin.id);
        const freelancer = await db.Freelancer.findOne({
          where: {
            idUser: req.session.userLogin.id
          }
        });
        console.log('this is freelancer '+freelancer.firstName,freelancer.lastName);
        //return res.render('users/profile-edit', { freelancer, codN });
      } else {
        //const company = await db.Company.findByPk(req.session.userLogin.id);
        const company = await db.Company.findOne({
          where: {
            idUser: req.session.userLogin.id
          }
        });
        console.log('this id company '+company.dataValues)
        //res.render('users/profile-edit', { company, codN });
      }
    } else {
      return res.render('/');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
}