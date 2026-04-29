import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  fastFoodOutline, 
  pizzaOutline, 
  iceCreamOutline, 
  wineOutline,
  cartOutline,
  trashOutline,
  flameOutline,
  timeOutline,
  arrowBackOutline
} from 'ionicons/icons';

import { CarrinhoService } from './shared/services/carrinho';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, RouterLinkActive, RouterModule],
})
export class AppComponent {
  public carrinhoAberto = false;

  constructor(public carrinhoService: CarrinhoService) {
    addIcons({ 
      homeOutline, 
      fastFoodOutline, 
      pizzaOutline, 
      iceCreamOutline, 
      wineOutline,
      cartOutline,
      trashOutline,
      flameOutline,
      timeOutline,
      arrowBackOutline
    });
  }

  setOpen(isOpen: boolean) {
    this.carrinhoAberto = isOpen;
  }
}