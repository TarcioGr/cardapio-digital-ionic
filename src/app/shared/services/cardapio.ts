import { Injectable } from '@angular/core';
import { PRODUTOS } from '../data/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  constructor() { }

  // Busca todos de uma categoria (Bebidas, Sobremesas, etc)
  getByCategoria(categoria: string) {
    return PRODUTOS.filter(p => p.categoria === categoria);
  }

  // O SEGREDO ESTÁ AQUI: Busca UM produto pelo ID único
  getById(id: number) {
    return PRODUTOS.find(p => p.id === id);
  }
}