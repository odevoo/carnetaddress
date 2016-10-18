import { Component, Input} from '@angular/core';

import {SearchPipe} from './search-pipe';
import {orderByPipe} from './orderByPipe';

@Component({
  selector: 'my-app',
  pipes: [SearchPipe, orderByPipe],
  templateUrl: '.app.component.html'



})
export class AppComponent {
title = "Carnet d'adresses";

friends = [
    {isActive:false, firstname: 'Marie', phone: '0688546622', address: '22 rue de l\'Elysée', cp:'75015', myRequest : false, timestamp: 1476264134, image: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
    {isActive:false, firstname: 'Noah', phone: '0752824525', address: '2 allée des roses', cp:'93200',myRequest : false, timestamp: 1460256014, image: "https://randomuser.me/api/portraits/thumb/men/61.jpg"},
    {isActive:false, firstname: 'Bill', phone: '0621554738', address: '77 Avenue du Général de Gaulle', cp:'75008',myRequest : true, timestamp: 1469022000, image: "https://randomuser.me/api/portraits/thumb/men/69.jpg"},
    {isActive:false, firstname: 'Steve', phone: '0657825424', address: '1 rue Charles Tillon', cp:'93300',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/46.jpg" },
    {isActive:false, firstname: 'Claire', phone: '0622353542', address: '47 rue du Maine', cp:'75014',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/64.jpg" },
    {isActive:false, firstname: 'Nathalie', phone: '0784559975', address: '155 Avenue de Flandre', cp:'75019',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/18.jpg" },
    {isActive:false, firstname: 'Mark', phone: '0756458211', address: '10 Bld de Montmorency', cp:'75016',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/86.jpg" }
  ];

    newFriend:Object = {} ;

  details:Object;


  onSubmit(){
    var timestamp = Math.round(Date.now() / 1000) ;

    console.log('ok');
    this.newFriend.isActive = false;
    this.newFriend.cp = "75000";
    this.newFriend.myRequest = false;
    this.newFriend.timestamp = timestamp;
    this.newFriend.image = "https://randomuser.me/api/portraits/thumb/men/5.jpg";
    this.friends.push(this.newFriend);

  }

  showDetails(friend){

    this.details = friend;
  }

hideDetails() {
  this.details = false;
}

deleteFriend (friend) {
  let index = this.friends.indexOf(friend);
  this.friends.splice(index, 1);
  this.details = false;
}
// |search: term
//<div [term]="term" class="contactcontainer">
//[(ngModel)]="newFriend.firstname"

 }


//https://github.com/DenisVuyka/ng2samples-blank
