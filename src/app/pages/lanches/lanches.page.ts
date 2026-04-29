import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Adicione o Router aqui

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class LanchesPage {
  public produtos = [
    { 
      id: 1, 
      nome: 'Classic Burger', 
      preco: 25.90, 
      desc: 'Pão brioche, carne 160g, queijo cheddar e maionese artesanal.',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' 
    },
    { 
      id: 2, 
      nome: 'Mega Bacon', 
      preco: 34.00, 
      desc: 'Para quem ama bacon: 4 fatias crocantes, barbecue e cebola roxa.',
      img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400' 
    }
  ];

  // Injetamos o Router no construtor
  constructor(private router: Router) {}

  // Esta função é o segredo para levar os dados para a tela de detalhes
  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], { 
      state: { produto: item } 
    });
  }
}