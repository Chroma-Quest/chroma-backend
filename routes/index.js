var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'logged out' );
  res.render('index', { title: 'Express Demo'});
});

module.exports = router;

// save for later 
// const { requiresAuth } = require('express-openid-connect');

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });