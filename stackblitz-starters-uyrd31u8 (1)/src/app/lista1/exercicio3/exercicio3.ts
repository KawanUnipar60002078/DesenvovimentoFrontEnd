import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio3.html',
  styleUrls: ['./exercicio3.css']
})
export class Exercicio3 {
  constructor(private router: Router) {}
  number1: number | null = null;
  number2: number | null = null;
  resultado: number | null = null;

  calcularReajuste(){
    let n1 = Number(this.number1) || 0;
    let n2 = Number(this.number2) || 0;
    this.resultado = n1 + (n1 * (n2 / 100));
  }
 
  voltar() {
    this.router.navigate(['/lista1']);
}}
