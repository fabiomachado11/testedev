import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DadosService } from '../../dados.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dados: any;

  constructor(private dadosService: DadosService) {
    this.dadosService.getDados().subscribe(dados => {
      this.dados = dados;
    });
  }
}
