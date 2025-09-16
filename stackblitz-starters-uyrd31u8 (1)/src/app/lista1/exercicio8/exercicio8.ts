import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio8',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.css'
})
export class Exercicio8 {

number1: number | null = null;
resultado: number | null = null;
mensagem: string = ''

calcularCodigoProduto(){
  let n1= Number(this.number1) || 0;
  
  if (n1 == 1 ){
    this.resultado = n1;
    this.mensagem = "Parafuso"
  } else if (n1 == 2){
    this.resultado = n1;
    this.mensagem = " Porca"
  } else if (n1 == 3){
    this.resultado = n1;
    this.mensagem = " Prego"
  } else {
    this.mensagem = "Diversos"
  }


  
}
constructor(private router: Router) {}
  voltar() {
    this.router.navigate(['/lista1']);
  }}
