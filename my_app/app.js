var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session'); 
var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configuro session
app.use(session({ secret: "nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true
  }));

// Middleware para guardar el usuario logueado en res.locals
app.use(function(req, res, next) {
  if (req.session.usuarioLogueado !== undefined) {
    res.locals.user = req.session.usuarioLogueado;
    res.locals.usuario = req.session.usuarioLogueado;
  } else {
    res.locals.user = null;
  }
  return next();
});


app.use('/index', indexRouter);
app.use('/product', productRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
