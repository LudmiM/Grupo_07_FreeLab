const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');

const app = express();

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app
  .use(logger('dev'))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use('/', indexRouter)
  .use('/usuarios', usersRouter)
  .use('/productos', productsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
