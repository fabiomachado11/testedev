import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../../dados.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {

  nome!: string;
  sobrenome!: string;
  data!: number;
  email!: string;
  cpf!: number;



  constructor(private router: Router, private dadosService: DadosService) { }

  enviarInformacoes() {
    const dados = { nome: this.nome, sobrenome: this.sobrenome, data: this.data, email: this.email, cpf:this.cpf };
    this.dadosService.setDados(dados);
    this.router.navigate(['/menu']);

}
}
