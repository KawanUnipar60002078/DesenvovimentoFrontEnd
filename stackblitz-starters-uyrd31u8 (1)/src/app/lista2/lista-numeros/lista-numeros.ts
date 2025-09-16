import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-numeros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-numeros.html',
  styleUrls: ['./lista-numeros.css'],
})
export class ListaNumeros {
  constructor(private router: Router) {}
  novoNumero: number | null = null;

  listaNumeros: number[] = [];

  adicionarNumero() {
    if (this.novoNumero !== null && !isNaN(this.novoNumero)) {
      this.listaNumeros.push(this.novoNumero);
      this.novoNumero = null;
    }
  }

  removerNumero(index: number) {
    this.listaNumeros.splice(index, 1);
  }
  /*alterar aqui */
  get soma(): number {
    return this.listaNumeros.reduce((acc, num) => acc + num, 0);
  }

  get media(): number {
    return this.listaNumeros.length > 0
      ? this.soma / this.listaNumeros.length
      : 0;
  }
  voltar() {
    this.router.navigate(['/lista2']);
}
}
