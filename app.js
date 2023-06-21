const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');

require('dotenv').config();

const session = require('express-session');
const sessionStore = require('connect-mongodb-session')(session);

const homeRoute = require('./routes/home');
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const userRoute = require('./routes/user');
const cartRoute = require('./routes/cart');

const app = express();

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('DB is connected...')).catch((error)=> console.log(error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(expressLayout);
app.set('view engine', 'ejs');

app.use(flash());

const STORE = new sessionStore({
    uri: DB_URI,
    collection: 'sessions'
});

app.use(session({
    secret: 'this is my secret to hash express sessions',
    saveUninitialized: false,
    store: STORE
}));

app.use(homeRoute);
app.use('/admin', categoryRoute);
app.use('/admin', productRoute);
app.use('/admin', userRoute);
app.use('/admin', cartRoute);

app.listen(PORT, ()=> {
    console.log('Server is running ...');
});

