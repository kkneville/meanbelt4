import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './user'

@Injectable()
export class MainService {

  constructor(private _http: Http,
  	  	private _route: Router 
  	  	) { }

currentUser(callback){
  return this._http.get('/user')
    .subscribe(
      (response) => {
        if (!response.json().user){
          console.log('no user')
          callback(false)
        }
        else {
          console.log(response.json().user.name)
          callback(response.json().user)
        }
      }
    )
}

  items = []

  addUser(user, callback){
  	console.log("submitting; ", user)
  	return this._http.post('/login', user)
  	.subscribe(
  		(response) => {
  			console.log('Success');
  			console.log(response.json().user.name)
  			callback(response.json().user);
  		},
  		(err) => {
  			console.log(err);
  		}
  	)
  }

  logout(callback) {
  	return this._http.get('/logout')
  	.subscribe(
  		(response) => {
  			console.log('Logged out');
  			callback()
  		}
  )}


  addItem(item, callback){
    console.log(item)
    return this._http.post('/create', item)
    .subscribe(
      (response) => {
        console.log('Success');
        console.log(response.json())
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getItems(callback){
    console.log("attempting to get items")
    return this._http.get('/index')
    .subscribe(
      (response) => {
        console.log(response.json())
        callback(response.json().items);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  //  getUsers(callback){
  //   console.log("attempting to get users")
  //   return this._http.get('/users')
  //   .subscribe(
  //     (response) => {
  //       console.log(response.json())
  //       this.users = response.json().users
  //       callback(response.json().users);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }


   deleteItem(id, callback){
    console.log("this is the id: ", id)
    return this._http.post('/delete', {id})
    .subscribe(
      (response) => {
        console.log(response.json())
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
