import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user';
import { Item } from '../../item';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

item
items
users
person_id
person_name
currentUser = new User

  constructor(
  	private _MainService: MainService,
  	private _route: ActivatedRoute
  ) { }

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
  	this._MainService.getItems(


  		)
  }
