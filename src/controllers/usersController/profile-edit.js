const data = require('./../../data');

module.exports = (req, res) => {
  console.log('estoy apunto de entrar');
    if (req.session){
      const d = data.leerJSON('products').servicios.find((p) => p.id === req.session.userLogin.id);
      console.log('entreee');
      return res.render('users/profile-edit', { d });
    }else{
      return res.render('/');
    }
}