import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DateService} from '../services/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInput = "Hello";

  userInputFC = new FormControl('hello again');


  userForm = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  })


//dateService : DateService;
  constructor(public dateService : DateService) { //public dateService permet d'instancier la variable, donc pas besoin de la créer juste avant, c'est lourd à faire
    this.dateService = dateService;
  }


  showForm(){
    console.log(this.userForm);
  }

  ngOnInit(): void {
  }

}
