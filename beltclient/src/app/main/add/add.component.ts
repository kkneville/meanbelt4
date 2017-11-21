import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user';
import { Item } from '../../item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

currentUser = new User
item = new Item

  ngOnInit() {
  	this.item = new Item
  	this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
        }
        else {
          console.log("no user")
        }
    })
    this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
           console.log("user is: ", this.currentUser)
    })
  }

today = new Date().toISOString()

onSubmit(event) {
  	console.log(this.item)
  	event.preventDefault();
  	console.log('attempting to save item')
  	this._MainService.addItem(this.item, (item) => {
  		console.log(item);
  		this._route.navigateByUrl('/main/list')
  	});
  };



}
