var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'logged out' );
  res.render('index', { title: 'Express Demo'});
});

module.exports = router;
