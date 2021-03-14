import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PeliculaComponent,
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
  
    SharedModule,
    NgxSpinnerModule
    
  ]
})
export class PeliculaModule { }
