const User = require('../models/User');
const bcrypt = require('bcrypt');

const signup = async(req, res) => {
    res.render('signup', {isUser: false});
}
const login = async(req, res) => {
    res.render('login', {isUser: false});
}


const signupStore = async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const user = await newUser.save();
        res.send('ok');
    }catch(error){
        console.log(error.message);
    }
}

const loginStore = async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
             res.render('login');
        }else{
            const comparePassword = await bcrypt.compare(req.body.password, user.password);
            if(!comparePassword){
                 res.render('login');
            }else {
                req.session.userId = user._id;
                 res.redirect('/');
            }
        }
    }catch(error){
        console.log(error.message);
    }
}

const logout = async(req, res) => {
    req.session.destroy();
    res.redirect('/')
}

module.exports = {
    signup,
    signupStore,
    login,
    loginStore,
    logout
}