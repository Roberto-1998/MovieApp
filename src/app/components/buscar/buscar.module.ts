import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuscarComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
  
  ]
})
export class BuscarModule { }
