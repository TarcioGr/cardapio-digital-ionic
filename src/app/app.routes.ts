import { Routes } from '@angular/router'; // Importe o tipo aqui

export const routes: Routes = [ // Adicione ": Routes" aqui
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'lanches',
    loadComponent: () =>
      import('./pages/lanches/lanches.page').then(m => m.LanchesPage)
  },
  {
    path: 'refeicoes',
    loadComponent: () =>
      import('./pages/refeicoes/refeicoes.page').then(m => m.RefeicoesPage)
  },
  {
    path: 'sobremesas',
    loadComponent: () =>
      import('./pages/sobremesas/sobremesas.page').then(m => m.SobremesasPage)
  },
  {
    path: 'bebidas',
    loadComponent: () =>
      import('./pages/bebidas/bebidas.page').then(m => m.BebidasPage)
  },

{
  path: 'detalhe/:id',
  loadComponent: () => import('./pages/detalhe/detalhe.page').then(m => m.DetalhesPage)
},

  {
    path: 'detalhes',
    loadComponent: () => import('./pages/detalhe/detalhe.page').then(m => m.DetalhesPage) // Note o 's' no final de DetalhesPage
  }
];