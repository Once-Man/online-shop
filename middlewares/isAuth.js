const isAuthTest = async(req, res, next) => {
    if(req.session.userId){
        next();
    }else{
        res.redirect('/admin/login');
    }
}

const notAuth = (req, res, next) => {
    if(!req.session.userId){
        next();
    }
    else{
        res.redirect('/');
    }
}
module.exports = {
    isAuthTest,
    notAuth
}