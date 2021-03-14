import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from './services/peliculas.service';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PeliculasService
  ]
})
export class CoreModule { }
