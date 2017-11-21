var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'name is required'],
		minlength: 2
	},

	_items: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Item"
	}],

}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)