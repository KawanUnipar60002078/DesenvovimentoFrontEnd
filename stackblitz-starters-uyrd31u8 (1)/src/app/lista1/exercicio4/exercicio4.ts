import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio4.html',
  styleUrls: ['./exercicio4.css']
})
export class Exercicio4 {
  
  number1: number | null = null;
  number2: number | null = null;
  number3: number | null = null;
  resultadoMedia: number | null = null;
  resultadoPonderada: number | null = null;
  resultadoSomaMedias: number | null = null;
  resultadoMediaDasMedias: number | null = null;

  calcularMedia(){
    

    let n1 = Number(this.number1) || 0;
    let n2 = Number(this.number2) || 0;
    let n3 = Number(this.number3) || 0;
    this.resultadoMedia = (n1 + n2 + n3) /3
    this.resultadoPonderada = ((n1 * 3 ) + (n2 * 2)+ (n3 * 5))/ 10
    this.resultadoSomaMedias = this.resultadoPonderada + this.resultadoMedia
    this.resultadoMediaDasMedias = (this.resultadoMedia + this.resultadoPonderada) / 2

  }
  constructor(private router: Router) {}
  voltar() {
    this.router.navigate(['/lista1']);
}}
