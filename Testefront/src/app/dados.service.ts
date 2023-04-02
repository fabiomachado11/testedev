import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dadosSubject = new BehaviorSubject<any>(null);

  setDados(dados: any) {
    this.dadosSubject.next(dados);
  }

  getDados() {
    return this.dadosSubject.asObservable();
  }
}
