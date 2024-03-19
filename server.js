var express = require('express');
var indexRouter = require('./routes/index.js');
const { auth } = require('express-openid-connect');

require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_URL
};

var app = express();
app.set('views', 'views');
app.set('view engine');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// application of middleware
app.use(auth(config));

app.use('/', indexRouter);

app.listen(3000, () =>{

});
