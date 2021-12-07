import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'help', loadChildren: () => import('./components/help/help.module').then(m => m.HelpModule) },
  { path: 'usuario', loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'galeria', loadChildren: () => import('./components/galeria/galeria.module').then(m => m.GaleriaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
