const express = require('express');
var path = require('path');
// Create express instance
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require('./db');

// Require API routes
const users = require('./routes/users');
const test = require('./routes/test');
const login = require('./routes/login');
const register = require('./routes/register');
// Import API Routes
app.use(users);
app.use(test);
app.use(login);
app.use(register);
// Export express app
module.exports = app;

//set up

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
