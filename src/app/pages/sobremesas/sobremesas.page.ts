import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Adicionado Router
import { CardapioService } from '../../shared/services/cardapio';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class SobremesasPage implements OnInit {
  public itens: any[] = [];

  constructor(
    private cardapioService: CardapioService,
    private router: Router // Injetado para navegação
  ) {}

  ngOnInit() {
    // Busca os dados da categoria sobremesas
    this.itens = this.cardapioService.getByCategoria('sobremesas');
  }

  // Função para navegar enviando os dados da sobremesa via state
  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], { 
      state: { produto: item } 
    });
  }
}