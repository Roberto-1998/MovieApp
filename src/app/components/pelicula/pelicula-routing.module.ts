import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [

{path:':id/:pagina', component:PeliculaComponent},
{path:':id/:pagina/:busqueda', component:PeliculaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
