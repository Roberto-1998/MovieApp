import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../../core/services/peliculas.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id:number;
  paginaAnterior:string;
  peliculaDetails;
  busqueda:string;

  constructor(
    private route:ActivatedRoute,
    private _peliculas:PeliculasService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.fetchMovieDetails();
  }

  getParams(){
    this.route.params.subscribe((params)=>{
      this.id=params['id'];
      this.paginaAnterior=params['pagina'];
      if(params['busqueda']){
        this.busqueda=params['busqueda'];
      }
     })
  }

  fetchMovieDetails(){
    this.spinner.show();
    this._peliculas.getMovieDetails(this.id).subscribe((resp)=>{
      console.log(resp);
      this.peliculaDetails=resp;
      this.spinner.hide();
    },
    (error)=>{
      console.log(error);
      this.spinner.hide();
    })
  }



}
