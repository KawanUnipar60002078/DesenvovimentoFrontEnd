import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio6.html',
  styleUrls: ['./exercicio6.css']
})
export class Exercicio6 {
    constructor(private router: Router) {}
    number1: number | null = null;
    number2: number | null = null;
    number3: number | null = null;
    number4: number | null = null;
    resultado: number | null = null;

    calcularMenor(){

      let n1 = Number(this.number1) || 0;
      let n2 = Number(this.number2) || 0;
      let n3 = Number(this.number3) || 0;
      let n4 = Number(this.number4) || 0;
      this.resultado = Math.min(n1,n2,n3,n4);
    }
    
    voltar() {
      this.router.navigate(['/lista1']);
}}
