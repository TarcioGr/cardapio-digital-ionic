import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CarrinhoService } from '../../shared/services/carrinho';

// Importações dos ícones corrigidas
import { addIcons } from 'ionicons';
import { timeOutline, flameOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detalhe', // Seletor simplificado para evitar conflitos
  templateUrl: './detalhe.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetalhesPage implements OnInit {
  @Input() produto: any; // O Angular agora pode receber o produto via rota automaticamente

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {
    // Registra os ícones para que o motor do Ionic os encontre
    addIcons({ timeOutline, flameOutline, arrowBackOutline });
  }

ngOnInit() {
    // Se o @Input() falhar, tentamos o state como plano B
    if (!this.produto) {
      const navegacao = this.router.getCurrentNavigation();
      this.produto = navegacao?.extras.state?.['produto'];
    }

    // Só redireciona se REALMENTE não encontrar nada após as duas tentativas
    if (!this.produto) {
      console.error('Produto não recebido!');
      this.router.navigate(['/home']);
    }
  }

  adicionarAoCarrinho() {
    if (this.produto) {
      this.carrinhoService.adicionar(this.produto);
      // Navega de volta para a home após adicionar, mantendo o fluxo do app
      this.router.navigate(['/home']);
    }
  }
}