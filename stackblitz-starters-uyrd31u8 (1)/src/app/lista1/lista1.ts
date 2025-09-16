import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista1',
  imports: [],
  templateUrl: './lista1.html',
  styleUrl: './lista1.css',
})
export class Lista1 {
  constructor(private router: Router) {}
  navegarParaExercicio1() {
    this.router.navigate(['/exercicio1']);
  }

  navegarParaExercicio2() {
    this.router.navigate(['/exercicio2']);
  }

  navegarParaExercicio3() {
    this.router.navigate(['/exercicio3']);
  }

  navegarParaExercicio4() {
    this.router.navigate(['/exercicio4']);
  }

  navegarParaExercicio5() {
    this.router.navigate(['/exercicio5']);
  }

  navegarParaExercicio6() {
    this.router.navigate(['/exercicio6']);
  }

  navegarParaExercicio7() {
    this.router.navigate(['/exercicio7']);
  }

  navegarParaExercicio8() {
    this.router.navigate(['/exercicio8']);
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
