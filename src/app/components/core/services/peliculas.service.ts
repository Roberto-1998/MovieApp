import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

 

  private URL:string='https://api.themoviedb.org/3';
  private apiKey:string='81bb757e96d5e50f68df5ac5bbaa9fa1';

  constructor(
    private http:HttpClient
  ) { }


  getCartelera(){

    const today=new Date();
    let year=today.getFullYear();
    let mounth=today.getMonth();

    let day=today.getDate();
    let dayNextWeek=today.getDate()+7;

    let fullDateToday:string=`${year}-${this.getValidDate(mounth)}-${this.getValidDate(day)}`;
    let fullDateNextWeek:string=`${year}-${this.getValidDate(mounth)}-${this.getValidDate(dayNextWeek)}`;
  
    console.log(fullDateToday);
    console.log(fullDateNextWeek);

    let params=new HttpParams();
    params=params.append('primary_release_date.gte', fullDateToday);
    params=params.append('primary_release_date.lte',fullDateNextWeek );
    params=params.append('api_key', this.apiKey);

    return this.http.get(`${this.URL}/discover/movie?${params}`).pipe(
      map((resp:any)=>resp.results)
    )
  }


  getPopulares(){

    let params=new HttpParams();
    params=params.append('sort_by', 'popularity.desc');
    params=params.append('api_key', this.apiKey);
    
    return this.http.get(`${this.URL}/discover/movie?${params}`).pipe(
      map((resp:any)=>resp.results)
    )

  }

  getMovieDetails(id:number){
    let params=new HttpParams();
    params=params.append('api_key', this.apiKey);
    params=params.append('language', 'en-US');
    return this.http.get(`${this.URL}/movie/${id}?${params}`)
  }


  getMoviesSearch(texto:string){

    let params=new HttpParams();
    params=params.append('api_key', this.apiKey);
    params=params.append('language', 'es');
    params=params.append('query', texto);
    params=params.append('sort_by', 'popularity.desc');
    return this.http.get(`${this.URL}/search/movie?${params}`).pipe(
      map((resp:any)=>resp.results)
    )
  }

  getHighestRated(){
    let params=new HttpParams();
    params=params.append('certification_country', 'US');
    params=params.append('certification', 'R');
    params=params.append('sort_by', 'vote_average.desc');
    params=params.append('api_key', this.apiKey);
    return this.http.get(`${this.URL}/discover/movie/?${params}`).pipe(
      map((resp:any)=>resp.results)
    )

  }






  private getValidDate(x:number){
    if(x<10){
      return '0'+x;
    }
    else{
      return x;
    }
  }

 








}
