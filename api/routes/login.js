const { Router } = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const router = Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.redirect('login', { meesage: 'Please try agiain' });
  }

  const user = await User.findOne({
    username
  });

  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      return res.render('/', { user });
    } else {
      return res.render('login', {
        message: 'Username or Password incorrect'
      });
    }
  } else {
    return res.render('login', {
      message: 'Username does not exist'
    });
  }
});

module.exports = router;
