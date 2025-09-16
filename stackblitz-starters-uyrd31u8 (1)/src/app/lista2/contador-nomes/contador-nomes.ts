import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contador-nomes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contador-nomes.html',
  styleUrls: ['./contador-nomes.css'],
})
export class ContadorNomes {
  constructor(private router: Router) {}
  novoNome: string = '';
  listaNomes: string[] = [];

  adicionarNome() {
    if (this.novoNome.trim()) {
      this.listaNomes.push(this.novoNome.trim());
      this.novoNome = ''; // limpa o input
    }
  }

  removerNome(index: number) {
    this.listaNomes.splice(index, 1);
  }

  // Total de nomes
  get totalNomes(): number {
    return this.listaNomes.length;
  }
  voltar() {
    this.router.navigate(['/lista2']);
  }
}
