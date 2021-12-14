const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
  const { body } = req;

  const user = await sequelize.models.users.findOne({
    where: {
      email: body.email
    }
  })

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  // Generate a token jsonwebtoken

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRESIN,
  })

  return res.json({
    message: 'Authenticated sucessfully',
    token
  })

});

router.post('/signup', (req, res) => {

  const { body } = req;

  const user = await sequelize.models.users.findOne({
    where: {
      email: body.email
    }
  })

  if (user) {
    return res.status(400).json({ message: 'This email is already registered' })
  }

  user = await sequelize.models.users.create({
    nmae: body.name,
    lastname: body.lasname,
    email: body.email,
    type: 'client',
    password: body.password
  })

  await user.save();

  return res.json({ message: 'Your account was created sucessfully ====> here' })

});


module.exports = router;
