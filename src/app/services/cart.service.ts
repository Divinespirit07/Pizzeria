import { Injectable } from '@angular/core';

export interface CartItem {
  id: string;
  type: string;
  price: number;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  topping: string[];
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  customPizzaPrice = 0;

  addToCart(item: CartItem) {

    const existingItem = this.cartItems.find(
      cartItem => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity ?? 0) + 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
  }

  increaseQuantity(index: number) {
    const item = this.cartItems[index];

    item.quantity = (item.quantity ?? 0) + 1;
  }

  decreaseQuantity(index: number) {
    const item = this.cartItems[index];

    if ((item.quantity ?? 0) > 0) {
      item.quantity = (item.quantity ?? 0) - 1;
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);

    if (this.cartItems.length === 0) {
      this.customPizzaPrice = 0;
    }
  }

  clearCart() {
    this.cartItems.length = 0;
    this.customPizzaPrice = 0;
  }

  hasPizza(): boolean {
    return this.cartItems.length > 0;
  }

  addCustomPizzaPrice(price: number) {
    this.customPizzaPrice = price;
  }

  getTotal() {
    let total = 0;

    for (const item of this.cartItems) {
      total += Number(item.price) * (item.quantity ?? 0);
    }

    total += this.customPizzaPrice;

    return total;
  }
}