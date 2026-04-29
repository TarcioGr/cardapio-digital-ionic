import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Importe o Router
import { CarrinhoService } from '../../shared/services/carrinho';

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
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500' 
    },
    { 
      id: 102, 
      nome: 'Feijoada Completa', 
      preco: 38.00, 
      desc: 'Nossa famosa feijoada com carnes nobres, arroz branco, couve refogada, farofa e laranja.',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500' 
    },
    { 
      id: 103, 
      nome: 'Frango Grelhado Fit', 
      preco: 32.50, 
      desc: 'Peito de frango marinado em ervas finas, acompanhado de mix de legumes no vapor e arroz integral.',
      img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500' 
    },
    { 
      id: 104, 
      nome: 'Strogonoff de Frango', 
      preco: 29.90, 
      desc: 'Strogonoff cremoso com champignon, arroz soltinho e batata palha super crocante.',
      img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500' 
    }
  ];

  // Injetando o Router junto com o CarrinhoService
  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  // Função para abrir a tela de detalhes enviando o objeto completo
  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], { 
      state: { produto: item } 
    });
  }

  // Função para adicionar o item ao carrinho direto da lista
  adicionarAoCarrinho(item: any, event?: Event) {
    if (event) {
      event.stopPropagation(); // Evita abrir os detalhes ao clicar apenas no botão de adicionar
    }
    this.carrinhoService.adicionar(item);
    console.log('Adicionado:', item.nome);
  }
}