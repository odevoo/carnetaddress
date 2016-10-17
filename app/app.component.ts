import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div class="container-fluid header">
  <h1 class="text-center">{{title}}</h1>
  </div>
  <div class="container formcontainer">
  <div class="row">
  <div class="col-xs-4 text-right">Rechercher : </div>
  <div class="col-xs-8"><input class="form form-control"></div>
  <div class="col-xs-3">Prénom: <input class="form form-control"></div>
  <div class="col-xs-3">Phone: <input class="form form-control"></div>
  <div class="col-xs-3">address: <input class="form form-control"></div>
  <div class="col-xs-3"><button class="btn btn-info">Ajouter</button></div>
  </div>
  </div>
  <div class="container content">
  <div class="col-xs-6">
  <h2>Vous avez {{friends.length}} contacts</h2>
  <div class="contactcontainer">
  <ul>
  <li class="heroes" (click)="showDetails(friend)" *ngFor = "let friend of friends">
    <button class="btn btn-info">X</button>  <img [src]="friend.image">    {{friend.firstname}}
  </li>
  </ul>
  </div>
  </div>
  <div class="col-xs-6">
  <div *ngIf="!details">
  <h2>Cliquez sur un contact pour afficher les details</h2>
  </div>
  <div *ngIf="details">
    <h2>Details</h2>
    <div class="contactcontainer">
    <p>Contact ajouté le {{details.timestamp*1000 | date: 'dd/MM/yyyy'}}</p>
    <ul>
    <li>Prénom: {{details.firstname}} </li>
    <li>Téléphone: {{details.phone}}</li>
    <li>adresse: {{details.address}}  {{details.cp}}</li>
    </ul>
    </div>
  </div>
  </div>
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
    {isActive:false, firstname: 'Claire', phone: '0622353542', address: '47 rue du Maine', cp:'75014',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/64.jpg" },
    {isActive:false, firstname: 'Nathalie', phone: '0784559975', address: '155 Avenue de Flandre', cp:'75019',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/18.jpg" },
    {isActive:false, firstname: 'Mark', phone: '0756458211', address: '10 Bld de Montmorency', cp:'75016',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/86.jpg" }
  ];

  details:Object;

  showDetails(friend){

    this.details = friend;
  }



 }
