import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  //Add exports para que o modulo da aplicação consiga vizualizar a tag html
  exports: [
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
