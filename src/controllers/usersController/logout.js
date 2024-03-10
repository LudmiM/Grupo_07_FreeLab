// logout.js

module.exports = (req,res) => {
        
    req.session.destroy();
    res.clearCookie('FreeLab_user_Login_01');

    return res.redirect('/')
}
