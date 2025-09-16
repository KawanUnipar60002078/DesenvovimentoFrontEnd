import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista2',
  imports: [],
  templateUrl: './lista2.html',
  styleUrl: './lista2.css',
})
export class Lista2 {
  constructor(private router: Router) {}
  navegarParaExercicio1() {
    this.router.navigate(['/contador-nomes']);
  }

  navegarParaExercicio2() {
    this.router.navigate(['/lista-compras']);
  }

  navegarParaExercicio3() {
    this.router.navigate(['/lista-numeros']);
  }

  navegarParaExercicio4() {
    this.router.navigate(['/listanomes']);
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
