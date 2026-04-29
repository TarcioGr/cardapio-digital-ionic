import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Adicionado Router
import { CardapioService } from '../../shared/services/cardapio';
import { CarrinhoService } from '../../shared/services/carrinho';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class BebidasPage implements OnInit {
  public itens: any[] = [];
  public carrinhoAberto = false;

  constructor(
    public cardapioService: CardapioService,
    public carrinhoService: CarrinhoService,
    private router: Router // Injetado para navegação
  ) {}

  ngOnInit() {
    this.itens = this.cardapioService.getByCategoria('bebidas');
  }

  // Função para navegar enviando os dados da bebida
  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], { 
      state: { produto: item } 
    });
  }

  // Função para adicionar direto (caso tenha botão de "+" na lista)
  adicionarDireto(item: any, event: Event) {
    event.stopPropagation(); // Impede que abra os detalhes ao clicar no botão
    this.carrinhoService.adicionar(item);
    console.log('Bebida adicionada:', item.nome);
  }

  setOpen(isOpen: boolean) {
    this.carrinhoAberto = isOpen;
  }

  removerDoCarrinho(instanceId: number) {
    this.carrinhoService.remover(instanceId);
  }

  cancelarTudo() {
    this.carrinhoService.limpar();
    this.setOpen(false);
  }
}