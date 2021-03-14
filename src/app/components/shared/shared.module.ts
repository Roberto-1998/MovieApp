import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoimagePipe } from './pipes/noimage.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NoimagePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NoimagePipe,
    NavbarComponent
  ]
})
export class SharedModule { }
