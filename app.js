const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_URL
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// application of middleware
app.use(auth(config));

//add rA to const above with auth ex. { auth, requiresAuth}
// Chat gpt for prof route reference
app.get('/profile', requiresAuth(), (req, res) => {
  // Access user information from req.oidc.user
  res.send(JSON.stringify(req.oidc.user));
});


// app.use('/');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

