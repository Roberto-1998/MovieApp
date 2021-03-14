import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  texto:string;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }



  buscarMovies(texto:string){
    if (texto){
       this.router.navigate(['/buscar', texto]);
    }
    else{
      return null;
    }
   
  }

}
