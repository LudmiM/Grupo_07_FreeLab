const data = require('./../../data');

module.exports = (req,res) => {
        
    req.session.destroy();
    res.cookie('kitchening4EV3R_user',null,{
        maxAge : -1
    })

    return res.redirect('/')
}