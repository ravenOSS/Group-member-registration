var express = require('express');
var router = express.Router();
var Member = require('../models/member');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'IoT Colorado' });
});

/* POST registration */
// router.post('/register', function (req, res, next) {
//   console.log(`Registered`);
//   res.redirect('success', '/');
//   // res.redirect('success', { title: 'Thanks for registering' })
// });

// ===============local register=================================

router.post('/register', function (req, firstname, lastname, email, done) {
  Member.findOne({ email: email }, function (err, member) {
    if (err) {
      return done(err);
    }
    if (member) {
      console.log('member already exists');
      return res.status(400).send('Member already registered');
    } else {
      var newMember = new Member();
      newMember.firstname = req.body.firstname;
      newMember.lastname = req.body.firstname;
      newMember.email = req.body.email;
      newMember.save(function (err) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          console.log(newMember);
          return done(null, newMember);
        }
      });
    }
  });
});

/* render datatable page. */
router.get('/table', function (req, res, next) {
  res.render('userdetail', { title: 'dataTable' });
});

/* This is the api route to get the datatable ajax data */
router.get('/membertable', function (req, res, next) {
  Member.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, members) {
      if (err) { return next(err); }
      console.log(members);
      res.json(members);
    });
});

/* GET members listing. */
router.get('/members', function (req, res, next) {
  Member.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, members) {
      if (err) { return next(err); }
      res.render('userlist', { title: 'Our Members', members: members });
    });
});

module.exports = router;
