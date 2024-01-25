const data = require('./../../data');

module.exports = (req, res) => {
    if (req.session){
      const d = data.leerJSON('products').servicios.find((p) => p.id === req.session.userLogin.id);
      console.log(req.session.userLogin)
      return res.render('users/profile-edit', { d });
    }else{
      return res.render('/');
    }
}