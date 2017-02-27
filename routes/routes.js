var User = require('../models/user');

module.exports = function(app, passport) {
  app.get('/:id?', function(req, res) {
    var newUser = new User();
    console.log(newUser);
    console.log(req.params);
    res.send('Params!');
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/api/spendings');
  });
};
