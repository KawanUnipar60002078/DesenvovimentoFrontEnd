import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio5.html',
  styleUrls: ['./exercicio5.css']
})
export class Exercicio5 {

  number1: number | null = null;
  number2: number | null = null;
  resultado: number | null = null;
  mensagem: String = ''

  calcularMaior(){

  

    let n1 = Number(this.number1) || 0;
    let n2 = Number(this.number2) || 0;
    if (n1 > n2) {
      this.resultado = n1
      this.mensagem = "O primeiro valor é maior"
    } else {
      this.resultado = n2
      this.mensagem = "O segundo valor é maior"
    }
    
  }
  constructor(private router: Router) {}
  voltar() {
    this.router.navigate(['/lista1']);
}}
