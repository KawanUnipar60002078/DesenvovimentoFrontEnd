import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Lista1 } from './lista1/lista1';
import { Lista2 } from './lista2/lista2'; // Import da Lista2
import { Exercicio1 } from './lista1/exercicio1/exercicio1';
import { Exercicio2 } from './lista1/exercicio2/exercicio2';
import { Exercicio3 } from './lista1/exercicio3/exercicio3';
import { Exercicio4 } from './lista1/exercicio4/exercicio4';
import { Exercicio5 } from './lista1/exercicio5/exercicio5';
import { Exercicio6 } from './lista1/exercicio6/exercicio6';
import { Exercicio7 } from './lista1/exercicio7/exercicio7';
import { Exercicio8 } from './lista1/exercicio8/exercicio8';
import { ContadorNomes } from './lista2/contador-nomes/contador-nomes';
import { ListaCompras } from './lista2/lista-compras/lista-compras';
import { ListaNumeros } from './lista2/lista-numeros/lista-numeros';
import { Listanomes } from './lista2/listanomes/listanomes';

export const routes: Routes = [
  { path: 'lista1', component: Lista1 },
  { path: 'lista2', component: Lista2 }, // Rota para Lista2
  { path: 'home', component: Home },
  { path: 'exercicio1', component: Exercicio1 },
  { path: 'exercicio2', component: Exercicio2 },
  { path: 'exercicio3', component: Exercicio3 },
  { path: 'exercicio4', component: Exercicio4 },
  { path: 'exercicio5', component: Exercicio5 },
  { path: 'exercicio6', component: Exercicio6 },
  { path: 'exercicio7', component: Exercicio7 },
  { path: 'exercicio8', component: Exercicio8 },

  { path: 'contador-nomes', component: ContadorNomes },
  { path: 'lista-compras', component: ListaCompras },
  { path: 'lista-numeros', component: ListaNumeros },
  { path: 'listanomes', component: Listanomes },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
