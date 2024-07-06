var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var authRoutes = require("./routes/authRouter");
var userRoutes = require("./routes/userRouter");
var taskRoutes = require("./routes/taskRouter");
// var sessionRouter = require("./routes/sessionsRouter")

var app = express();
// view engine setup

app.set('view engine', 'jade');``

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ //without cors it throws some behaviour issues
  credentials : true, 
  origin : true, // it allows communication between different origins like front end or backend
}))
app.use(cookieParser());

app.use("/auth", authRoutes)
app.use("/user", userRoutes);
app.use("/task", taskRoutes);  
// app.use("/session", sessionRouter)


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
