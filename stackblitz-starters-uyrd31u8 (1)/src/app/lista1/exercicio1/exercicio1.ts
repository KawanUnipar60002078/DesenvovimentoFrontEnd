import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css',
})
export class Exercicio1 {
 

  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;

  somar() {
    let n1 = Number(this.numero1) || 0;
    let n2 = Number(this.numero2) || 0;
    this.resultado = n1 - n2;
  }
  constructor(private router: Router) {}
  voltar() {
    this.router.navigate(['/lista1']);
  }
}
