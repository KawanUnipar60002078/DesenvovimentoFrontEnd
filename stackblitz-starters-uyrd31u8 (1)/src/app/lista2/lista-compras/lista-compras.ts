import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrls: ['./lista-compras.css'],
})
export class ListaCompras {
  constructor(private router: Router) {}
  
  novoProduto: string = '';
  novoPreco: number | null = null;

  listaProdutos: string[] = []; 
  listaPrecos: number[] = [];   

  adicionarProduto() {
    if (
      this.novoProduto.trim() !== '' &&
      this.novoPreco !== null &&
      !isNaN(this.novoPreco)
    ) {
      this.listaProdutos.push(this.novoProduto);
      this.listaPrecos.push(this.novoPreco);

    
      this.novoProduto = '';
      this.novoPreco = null;
    }
    
  }

  removerProduto(index: number) {
    this.listaProdutos.splice(index, 1);
    this.listaPrecos.splice(index, 1);
  }

  get total(): number {
    return this.listaPrecos.reduce((acc, preco) => acc + preco, 0);
  }
  voltar() {
    this.router.navigate(['/lista2']);
}
}

