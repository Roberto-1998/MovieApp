import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    GaleriaComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSpinnerModule,
    SharedModule,
  
  ]
})
export class HomeModule { }
