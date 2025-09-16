import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio7.html',
  styleUrl: './exercicio7.css'
})


export class Exercicio7 {
  constructor(private router: Router) {}
number1: number | null = null;
resultado: number | null = null;

calcularImparOuPar(){
  let n1 = Number(this.number1) || 0;
  if (n1 % 2 === 1){
    alert("O número é impar")
  } else {
    alert("O número é par")
  }

  }
  
  voltar() {
    this.router.navigate(['/lista1']);
}}
