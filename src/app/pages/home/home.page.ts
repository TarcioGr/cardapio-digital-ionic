import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../../shared/services/carrinho';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage {
  public promocoes = [
    { id: 1, titulo: 'Combo Supreme', subtitulo: 'Burguer + Batata + Refri', preco: 29.90, precoAntigo: 45.00, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', tag: 'Mais Vendido' },
    { id: 2, titulo: 'Dobradinha de Refri', subtitulo: 'Leve 2 Pague 1', preco: 12.00, precoAntigo: 24.00, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500', tag: '2 por 1' },
    { id: 3, titulo: 'Sobremesa do Dia', subtitulo: 'Pudim Gourmet', preco: 15.00, precoAntigo: 20.00, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500', tag: 'Sobremesa' }
  ];

  constructor(
    public carrinhoService: CarrinhoService,
    private appComponent: AppComponent
  ) {}

  abrirCarrinho() {
    this.appComponent.setOpen(true);
  }

  adicionar(item: any) {
    this.carrinhoService.adicionar({
      id: item.id,
      nome: item.titulo,
      preco: item.preco,
      img: item.img
    });
  }
}