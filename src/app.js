require('dotenv').config();
const nodemailer = require("nodemailer");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const apisRouter = require('./routes/apis.routes');

const checkLocalSession = require('./middleware/checkLocalSession');
const checkCookie = require('./middleware/checkCookie');
const categories = require('./middleware/allCategories')

const session = require('express-session');

const app = express();

//Inicio nodemailer
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "589d986def82d1",
    pass: "df5d1a70bdce6d",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


//Fin nodemailer

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app
  .use(logger('dev'))
  .use(cookieParser())
  .use(methodOverride('_method'))

  // Middleware para formularios
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, '..', 'public')))

  //Configuracion de sesion
  .use(session({
    secret: 'FreeLab',
    resave: true, 
    saveUninitialized: true
  }))

  .use(categories)
  .use(checkCookie)
  .use(checkLocalSession)

  // Rutas
  .use('/', indexRouter)
  .use('/usuarios', usersRouter)
  .use('/productos', productsRouter)
  .use('/apis', apisRouter)

// Manejo de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejo de errores generales
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
