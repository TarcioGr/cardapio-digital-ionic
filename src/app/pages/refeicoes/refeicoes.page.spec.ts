import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class RefeicoesPage {
  
  public pratos = [
    { 
      id: 101, 
      nome: 'Parmegiana de Carne', 
      preco: 42.90, 
      desc: 'Filé mignon empanado, coberto com molho de tomate caseiro e muito queijo. Acompanha arroz e fritas.',
      img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c17590?w=500' 
    },
    { 
      id: 102, 
      nome: 'Feijoada Completa', 
      preco: 38.00, 
      desc: 'Nossa famosa feijoada com carnes nobres, arroz branco, couve refogada, farofa e laranja.',
      img: 'https://images.unsplash.com/photo-1594179233381-800491910bb3?w=500' 
    },
    { 
      id: 103, 
      nome: 'Frango Grelhado Fit', 
      preco: 32.50, 
      desc: 'Peito de frango marinado em ervas finas, acompanhado de mix de legumes no vapor e arroz integral.',
      img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500' 
    },
    { 
      id: 104, 
      nome: 'Strogonoff de Frango', 
      preco: 29.90, 
      desc: 'Strogonoff cremoso com champignon, arroz soltinho e batata palha super crocante.',
      img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500' 
    }
  ];

  constructor() {}
}