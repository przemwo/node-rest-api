var User = require('../models/user');

module.exports = function(app) {
  app.get('/:id?', function(req, res) {
    var newUser = new User();
    console.log(newUser);
    console.log(req.params);
    res.send('Params!');
  });
};
