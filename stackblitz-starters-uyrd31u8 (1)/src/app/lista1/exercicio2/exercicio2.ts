import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio2.html',
  styleUrls: ['./exercicio2.css'],
})
export class Exercicio2 {
  constructor(private router: Router) {}

  number1: number | null = null;
  number2: number | null = null;
  resultado: number | null = null;

  calcularQuilo(){
    let n1 = Number(this.number1) || 0;
    let n2 = Number(this.number2) || 0;
    this.resultado = n1 / n2;

  }
 
  voltar() {
    this.router.navigate(['/lista1']);
}}
