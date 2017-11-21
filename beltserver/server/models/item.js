var mongoose = require('mongoose');
var User = require('./user');
var UserSchema = require('./user');

var ItemSchema = new mongoose.Schema({

	complaint: {
		type: String,
		required: [true, 'Required'],
		minlength: 5
	},

	datetime: {
		type: Date,
		required: [true, 'Required'],
	},

	date: {
		type: Date,
	},

	time: {
		type: String,
	},

	patient: {
		type: String
	},

	_user: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
	},


}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema)