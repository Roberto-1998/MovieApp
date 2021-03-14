import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';







import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './components/core/core.module';








@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
