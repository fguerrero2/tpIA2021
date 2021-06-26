var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bluebird = require('bluebird');
var fs = require('fs');

//incorporo cors
var cors = require('cors');

//import routes
var indexRouter = require('./routes/index');
var apiRouterUser = require('./routes/user'); 
var apiRouterProducts = require('./routes/products'); 
var apiRouterSucursal = require('./routes/sucursal'); 
//var apiRouterCategoria = require('./routes/categoria'); 
var apiRouterEntregamodo = require('./routes/entregamodo'); 

//instancio el servidor
var app = express();

// use cors
app.options('*', cors())
app.use(cors());

// seteo vistas 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));

//Indico que voy a usar json 
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Indico las rutas de los endpoint
app.use('/api', apiRouterUser);
app.use('/api', apiRouterProducts);
app.use('/api', apiRouterSucursal);
// app.use('/api', apiRouterCategoria);
// app.use('/api', apiRouterEntregamodo);
app.use('/', indexRouter);

//console.log("processENV",process.env);
if (process.env.NODE_ENV === 'Development') {
  require('./config').config();
}
console.log("NODE_ENV:",process.env.NODE_ENV)

//Database connection --
var mongoose = require('mongoose')
mongoose.Promise = bluebird;
let url = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`
console.log("BD",url);
let opts = {
  useNewUrlParser : true, 
  connectTimeoutMS:20000, 
  useUnifiedTopology: true
  };

mongoose.connect(url,opts)
  .then(() => {
    console.log(`Succesfully Connected to theMongodb Database..`)
  })
  .catch((e) => {
    console.log(`Error Connecting to the Mongodb Database...`),
    console.log(e)
  })

// catch 404 and forward to error handler 
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'Development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Setup server port
var port = process.env.PORT || 8080;
// Escuchar en el puerto
app.listen(port,()=>{
    console.log('Servidor de ABM Users iniciado en el puerto ',port);
});


module.exports = app;