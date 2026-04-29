import { Injectable } from '@angular/core';

// REMOVA A LINHA QUE TENTAVA IMPORTAR O CARRINHOSERVICE AQUI

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: any[] = [];

  constructor() {}

  adicionar(produto: any) {
    // Cria uma instância única para que excluir um X-Burguer não apague todos os outros iguais
    const itemComId = { ...produto, instanceId: Date.now() + Math.random() };
    this.itens.push(itemComId);
  }

  remover(instanceId: number) {
    this.itens = this.itens.filter(item => item.instanceId !== instanceId);
  }

  limpar() {
    this.itens = [];
  }

  getItens() {
    return this.itens;
  }

  getTotalItens() {
    return this.itens.length;
  }

  getValorTotal() {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }
}