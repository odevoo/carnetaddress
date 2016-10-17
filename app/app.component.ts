import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>Vous avez {{friends.length}} contacts</h2>
  <ul>
  <li class="heroes" (click)="showDetails(friend)" *ngFor = "let friend of friends">
    <img [src]="friend.image">{{friend.firstname}}
  </li>
  </ul>
  <div *ngIf="!details">
  Cliquez sur un contact pour afficher les details
  </div>
  <div *ngIf="details">
    <h2>Details</h2>
    <p>Contact ajouté le {{details.timestamp*1000 | date: 'dd/MM/yyyy'}}</p>
    <ul>
    <li>Prénom: {{details.firstname}} </li>
    <li>Téléphone: {{details.phone}}</li>
    <li>adresse: {{details.address}}</li>
    </ul>
  </div>

  `



})
export class AppComponent {
title = "Carnet d'adresses";

friends = [
    {isActive:false, firstname: 'Marie', phone: '0688546622', address: '22 rue de l\'Elysée', cp:'75015', myRequest : false, timestamp: 1476264134, image: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
    {isActive:false, firstname: 'Noah', phone: '0752824525', address: '2 allée des roses', cp:'93200',myRequest : false, timestamp: 1460256014, image: "https://randomuser.me/api/portraits/thumb/men/61.jpg"},
    {isActive:false, firstname: 'Bill', phone: '0621554738', address: '77 Avenue du Général de Gaulle', cp:'75008',myRequest : true, timestamp: 1469022000, image: "https://randomuser.me/api/portraits/thumb/men/69.jpg"},
    {isActive:false, firstname: 'Steve', phone: '0657825424', address: '1 rue Charles Tillon', cp:'93300',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/46.jpg" },
    {isActive:false, firstname: 'Claire', phone: '0622353542', address: '47 rue du Maine', cp:'75014',myRequest : false, timestamp: 1473082800, image: false },
    {isActive:false, firstname: 'Nathalie', phone: '0784559975', address: '155 Avenue de Flandre', cp:'75019',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/18.jpg" },
    {isActive:false, firstname: 'Mark', phone: '0756458211', address: '10 Bld de Montmorency', cp:'75016',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/86.jpg" }
  ];

  details:Object;

  showDetails(friend){

    this.details = friend;
  }



 }
