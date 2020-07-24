import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève")
      .subscribe( //le get renvoi un élément qu'on appelle "observable", subscribe permet de recevoir la valeur émise, donc de lire l'observable en fait
        
        (value) => this.trainData = value // value c'est le nom qu'on a choisit de donner à la variable qui contient la valeur renvoyé par le get
        //ici on a fait une fonction callback qui va nous permettre d'afficher la valeur, callback en fonction fléchée ES6
      )
  }

}
