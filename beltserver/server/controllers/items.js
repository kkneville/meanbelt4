var mongoose = require('mongoose');
var User = require('../models/user');
var Item = require('../models/item');
var session = require('express-session');


module.exports = {

	// index: function(req, res){
	// 	console.log("inside of index")
	// 	Item.find({}, function(err, items){
	// 		if (err) {
	// 			console.log(err)
	// 			console.log("trouble finding items at index")
	// 			return res.json({error:err.errors})
	// 		}
	// 		else {
	// 			console.log("yo, here are your items:", items)
	// 			return res.json({items:items})
	// 		}
	// 	});
	// },	


	// index: function(req, res){
	// 	console.log("inside of index")
	// 	User.findOne({_id: req.body.id})
	// 		.populate('_items')
	// 		.exec(function(err, user){
	// 		if (err) {
	// 			console.log(err)
	// 			console.log("trouble finding user at index")
	// 			return res.json({error:err.errors})
	// 		}
	// 		else {
	// 			console.log("yo, here are your items:", user._items)
	// 			return res.json({user: user})
	// 		}
	// 	});
	// },	



	index: function(req, res){
		console.log("inside of index")
		var today = new Date();
		today.setDate(today.getDate());
		Item.find({ datetime: { $gt: today }})
			.sort({datetime: 1})
			.populate('_user')
			.exec(function(err, items){
			if (err) {
				console.log(err)
				console.log("trouble finding items at index")
				return res.json({error:err.errors})
			}
			else {
				console.log("yo, here are your items:", items)
				return res.json({items:items})
			}
		});
	},


	create: function(req, res){
		console.log("Arrived at item/create")	
		User.findOne({_id: session.user_id }, function(err, user){
			if (err){
				console.log('error finding user at items.create')
				return res.json({error: err.errors})
			}
			console.log("found user: ", user)
			var item = new Item(req.body);
			item._user = user._id;
			item.patient = user.name
			console.log(item)
			item.save(function(err){
				if (err){
					console.log('error saving item')
					return res.json({error: err.errors})
				}
				console.log("user saved to item")
				user._items.push(item._id);
				user.save(function(err){
					if (err){
						console.log('error saving user with new item')
						return res.json({error: err.errors})
					}
					console.log("first user:", user)	
					console.log("item saved to user")	
					return res.json({status:"success - saved to current user "})	
				})
			})
		})
	},



	delete: function(req, res){
		console.log("arrived at delete")
		User.findOne({_id: session.user_id }, function(err, user){
			if (err){
				console.log('error finding user at items.create')
				return res.json({error: err.errors})
			}
			console.log("found user")

		User.update({_id: session.user_id}, {"$pull": {"_items": { "item": req.body.id} }}, 
			{ safe:true, multi:true}, function(err, obj) {
				if (err){
					console.log('error finding user at items.create')
					return res.json({error: err.errors})
				}
				console.log("item removed from user")
				Item.findOneAndRemove({_id: req.body.id})
					.exec(function(err, removed){
						if (err){
							console.log('error finding item in delete')
							return res.json({error:err.errors})
						}
						return res.json({status: "removed and deleted item"})
					})
				})	
			})
	},


		create: function(req, res){
		console.log("Arrived at item/create")	
		User.findOne({_id: session.user_id }, function(err, user){
			if (err){
				console.log('error finding user at items.create')
				return res.json({error: err.errors})
			}
			console.log("found user")
			var item = new Item(req.body);
			item._user = user._id;
			item.patient = user.name
			console.log(item)
			item.save(function(err){
				if (err){
					console.log('error saving item')
					return res.json({error: err.errors})
				}
				console.log("user saved to item")
				user._items.push(item._id);
				user.save(function(err){
					if (err){
						console.log('error saving user with new item')
						return res.json({error: err.errors})
					}
					console.log("first user:", user)	
					console.log("item saved to user")	
					return res.json({status:"success - saved to current user "})	
				})
			})
		})
	},




}	 		



