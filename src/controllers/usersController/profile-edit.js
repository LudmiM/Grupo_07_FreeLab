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
        //req.session.idFreelancer = freelancer.id;
        //console.log('this is freelancer ' + freelancer.firstName, freelancer.lastName);
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
        //console.log('Estos son los projects de company: ')
        //console.log(projects);
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