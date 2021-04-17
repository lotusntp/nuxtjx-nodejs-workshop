const { Router } = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const router = Router();

router.post('/register', async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.redirect('/register', { message: 'Please try again' });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    username,
    password: passwordHash
  });
  await user.save();
  req.user = user;
  res.json(user);
});

module.exports = router;
