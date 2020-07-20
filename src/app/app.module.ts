import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {path: 'user', component: UserComponent},
  {path: 'home', component: MainComponent}
  //{path:'/', component: MainComponent}// le "/" définit la route par défaut, générale. on cahnge juste ça pour que notre balise routerLinkActive (dans la page html) n'active par en permanence le bouton Acceuil dans la navbar
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    // AppRoutingModule -> noramelment on garde ça c'est un standard, une bonne pratique, puisqu'en fait AppRoutingModule
    //c'est un module qui import et export le RouterModule. Mais nous ici pour le tuto on s'en passe "parce qu'on a pas besoin de plusieurs modules"
    //-> clairement dans un vrai projet on garderait AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
