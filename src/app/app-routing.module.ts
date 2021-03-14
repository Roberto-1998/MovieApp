import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';

import { PeliculaComponent } from './components/pelicula/components/pelicula/pelicula.component';



const routes: Routes = [
{path:'home', loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule) },
{path:'buscar', loadChildren:()=>import('./components/buscar/buscar.module').then(m=>m.BuscarModule)},
{path:'pelicula', loadChildren:()=>import('./components/pelicula/pelicula.module').then(m=>m.PeliculaModule)},
{path:'', pathMatch:'full', redirectTo:'home'},
{path:'**', pathMatch:'full', redirectTo:'home'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
