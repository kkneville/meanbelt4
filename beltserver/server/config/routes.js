var mongoose = require('mongoose'); 
var path = require('path');
var users = require('../controllers/users')
var items = require('../controllers/items')


module.exports = (app, req, res) => {

	// app.get('/')

	app.post('/login', users.login);

	app.get('/logout', users.logout);

	app.get('/user', users.user);

	// app.get('/users', users.users);

	// app.get('/show/:id', users.show);


	app.get('/index', items.index);

	app.post('/create', items.create);

	app.post('/delete', items.delete);


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("../beltclient/dist/index.html"))
	});

}

	