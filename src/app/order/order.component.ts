import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';

export interface Pizza {
  id: string;
  type: string;
  price: number;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  topping: string[];
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  pizzaList: Pizza[] = [];

  constructor(
    private orderService: OrderService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza() {
    this.orderService.getPizza().subscribe(
      (data: Pizza[]) => {
        this.pizzaList = data;
      }
    );
  }

  addToCart(pizza: Pizza) {
    this.cartService.addToCart(pizza);
  }
}