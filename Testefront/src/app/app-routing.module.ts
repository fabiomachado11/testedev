import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conteudo',
    pathMatch: 'full'
  },
  {
    path: 'conteudo',
    component: ConteudoComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
