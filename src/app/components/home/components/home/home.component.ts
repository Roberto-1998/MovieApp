import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../core/services/peliculas.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:string[]=[];
  populares:string[]=[];
  topRated:string[]=[];

  constructor(
    private _peliculas:PeliculasService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
   
   this.fetchCartelera();
   this.fetchPopulares();
   this.fetchHighestRated();

 


  }


  fetchCartelera(){
    this.spinner.show();
    this._peliculas.getCartelera().subscribe((resp)=>{
      console.log(resp);
      this.cartelera=resp;
      this.spinner.hide();
     
    },(error)=>{
      console.log(error);
      this.spinner.hide();

    })
  }

  fetchPopulares(){
    this.spinner.show();
    this._peliculas.getPopulares().subscribe((resp)=>{
      this.populares=resp;
      this.spinner.hide();
    
    }, (error)=>{
      console.log(error);
      this.spinner.hide();
      
    })
  }

  fetchHighestRated(){
    this.spinner.show();
    this._peliculas.getHighestRated().subscribe((resp:any)=>{
        this.topRated=resp;
        this.spinner.hide();
    }, (error)=>{
      console.log(error);
      this.spinner.hide();
    })
  }



}
