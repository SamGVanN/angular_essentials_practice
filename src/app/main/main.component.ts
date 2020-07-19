import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string = "Samuel";

  // elements = [1, 2, 3, 4, 5];

  elements = ["Sam", "JoLrigolo", "Cocotte", 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

  userClick(){
    console.log("clicked");
  }

}
