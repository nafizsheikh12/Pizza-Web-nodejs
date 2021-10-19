const express = require('express');
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session);
const jwt = require('jsonwebtoken')
const passport = require('passport')





//json data
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//database connection
mongoose.connect('mongodb://localhost:27017/pizza',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("datebase start")
}).catch(err => {
    console.log(err)
})

const connection =  mongoose.connection;


//session store
let  mongoStore =  new MongoDbStore({
    mongooseConnection: connection,
    collection:'sessions'

})

//session config
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized:false,
    store: mongoStore,
    cookie: {maxAge: 100 * 60 * 60 * 24} //24 hours
}))


//passport config
const passportInit = require('./app/config/passport');
passportInit(passport);

app.use(passport.initialize());
app.use(passport.session());

//session flash dont know
app.use(flash())


//global middleware
app.use((req,res,next) =>{
  res.locals.session = req.session;
  res.locals.user = req.user
  next();
})

//set template engine
app.use(expressLayout)
app.set("views",path.join(__dirname,"/resources/views"));
app.set("view engine","ejs")

//modul
require('./router/web')(app);

//assets
app.use(express.static("public"));



app.listen(3000, () => {
    console.log('success con')
})