import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../core/services/peliculas.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls:['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  peliculas:string[]=[];
  texto:string;

  constructor(
    private _peliculas:PeliculasService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchMoviesByParams();
  }


  fetchMoviesByParams(){
  
     this.route.params.subscribe((params)=>{
       console.log(params['texto']);
       this.texto=params['texto'];
       if(this.texto){
        this._peliculas.getMoviesSearch(this.texto).subscribe((resp)=>{
          this.peliculas=resp;
        
        }, (error)=>{
          console.log(error);
         
        })
       }
       else{
        
         return null;
       }
    })
  }


  buscarPeliculas(){
  if(this.texto){
    this.spinner.show();
    this._peliculas.getMoviesSearch(this.texto).subscribe((resp)=>{
      this.peliculas=resp;
      this.spinner.hide();
      console.log(resp)
    }, (error)=>{
      console.log(error);
      this.spinner.hide();
    })
  }
   
  }



}
