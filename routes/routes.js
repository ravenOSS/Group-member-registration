var express = require('express');
var router = express.Router();
var Member = require('../models/member');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'IoT Colorado' });
});

/* POST registration */
router.post('/register', function (req, res, next) {
  res.redirect('success', { title: 'Thanks for registering' })
});

/* render datatable page. */
router.get('/table', function (req, res, next) {
  res.render('userdetail', { title: 'dataTable' });
});

/* This is the api route to get the datatable ajax data */
router.get('/usertable', function (req, res, next) {
  Member.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, users) {
      if (err) { return next(err); }
      console.log(users);
      res.json(users);
    });
});

/* GET users listing. */
router.get('/users', function (req, res, next) {
  Member.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, users) {
      if (err) { return next(err); }
      res.render('userlist', { title: 'Our Customers', users: users });
    });
});

module.exports = router;
