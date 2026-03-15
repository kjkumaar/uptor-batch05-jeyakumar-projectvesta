var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
const menRouter = require('./Item-catogories/men');
const accessoriesRouter = require('./Item-catogories/Accessories');
const kidsRouter = require('./Item-catogories/Kids');
const silkRouter = require('./Item-catogories/Silks');
const WeddingRouter = require('./Item-catogories/Weddingwear');
const womenRouter = require('./Item-catogories/Women');
const userRouter = require('./routes/users');


var app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ecommerce-Vesta")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/men', menRouter)
app.use('/accessories', accessoriesRouter)
app.use('/kids', kidsRouter)
app.use('/silks', silkRouter)
app.use('/weddingwear', WeddingRouter)
app.use('/women', womenRouter)



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
