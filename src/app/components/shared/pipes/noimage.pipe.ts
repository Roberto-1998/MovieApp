import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(pelicula:any): string{

    if(pelicula.backdrop_path){
      return 'https://image.tmdb.org/t/p/w500'+pelicula.backdrop_path;
    }
    else{
      if(pelicula.poster_path){
        return 'https://image.tmdb.org/t/p/w500'+pelicula.poster_path;
      }else{
        return 'assets/images/noimage.png';
      }
    }
  }

}
