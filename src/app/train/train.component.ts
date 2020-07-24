import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import {map} from 'rxjs/operators';


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


      //RxJS permet de créer nos propre observable, avec de nombreux opérateurs à notre disposition, auquel on attache les observer/callback comme dans le pattern normal
                                                                                                    // ces traitements doivent être effectués dans la méthode pipe
      timer(1000, 2000)
      .pipe(
        map(number => number + 1) //map est à importer, permet d'effectuer un traitement sur chaque élement de notre flux de données
      )
      .subscribe(
        (number) => console.log(number)
      )

  }

}
