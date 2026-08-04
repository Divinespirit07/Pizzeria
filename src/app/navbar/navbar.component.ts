import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public cartService: CartService) {}

  getCartQuantity() {
    let quantity = 0;

    for (const item of this.cartService.getCartItems()) {
      quantity += item.quantity ?? 0;
    }

    return quantity;
  }
}