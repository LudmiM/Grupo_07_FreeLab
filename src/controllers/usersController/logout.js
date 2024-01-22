const data = require('./../../data');

module.exports = (req,res) => {
        
    req.session.destroy();

    return res.redirect('/')
}