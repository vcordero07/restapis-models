// server.js
//
// ... imports
const {Users} = require('../models/users');
// ... other stuff
app.get('/users', (req, res) => {
  res.json(Users.get());  // returns a JSON array of user objects
});
// ... other stuff
