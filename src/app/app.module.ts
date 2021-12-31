import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha'; //add Module jogo da velha

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JogoDaVelhaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
