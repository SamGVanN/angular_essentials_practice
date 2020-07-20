import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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


  constructor() { }


  showForm(){
    console.log(this.userForm);
  }

  ngOnInit(): void {
  }

}
