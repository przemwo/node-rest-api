var User = require('../models/user');

module.exports = function(app, passport) {
  app.get('/profile', isLoggedIn, function(req, res){
      process.nextTick(function() {
        console.log("===============================");
        console.log('user: ', req.user);
        console.log('userId:', req.user.facebook.id);
        console.log("===============================");
        User.findOne({'facebook.id': req.user.facebook.id}, function(err, user){
          console.log('dupa');
          console.log(err);
          console.log(user);
        });
        console.log("==============================");
        res.send('Profile!');
      });
  	});

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


function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
    console.log('yes');
		return next();
	}
  console.log('no');
	res.redirect('/login');
}
