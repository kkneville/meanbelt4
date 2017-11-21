import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user';
import { Item } from '../../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items
	users
	currentUser = new User

  constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

  item = new Item
  today = new Date().toJSON().split('T')[0];

  
  ngOnInit() {
  	this._MainService.getItems(
      (items) => {
        if (items) {
          this.items = items
        }
        else {
          console.log("no items")
        }
    }),

  	this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
           // this.populate()
        }
        else {
          console.log("no user")
        }
    })
  };


deleteItem(event, id) {
    event.preventDefault();
    console.log('attempting to save item')
    this._MainService.deleteItem(id, (response) => {
      console.log(response);
      this.ngOnInit()
    });
  };


}
