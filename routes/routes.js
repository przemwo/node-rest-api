var User = require('../models/user');

module.exports = function(app) {
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
      // Successful authentication, redirect home.
      res.redirect('/profile');
    });
};
