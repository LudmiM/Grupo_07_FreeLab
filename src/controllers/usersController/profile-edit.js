const db = require('./../../database/models')

module.exports = async (req, res) => {

  try {
    if (req.session) {
      if (req.session.userLogin.idRole == 2) {
        const freelancer = await db.Freelancer.findOne({
          where: {
            idUser: req.session.userLogin.id
          }
        });
        return res.render('users/profile-edit',{
          ...freelancer.dataValues 
        });
      } else {
        const company = await db.Company.findOne({
          where: {
            idUser: req.session.userLogin.id
          }
        });
        const projects = await db.Project.findAll({
          where: {
            idCompany: company.id
          }
        })
        req.session.idCompany = company.id;
        return res.render('users/profile-edit',{
          ...company.dataValues,
          projects
        });
      }
    } else {
      return res.render('/');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
}