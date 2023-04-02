import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
