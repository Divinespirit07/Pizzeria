import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];
  customPizzaPrice: number = 0;

  constructor() {}
addToCart(item: any) {

  let existingItem = this.cartItems.find(
    cartItem => cartItem.id === item.id
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    item.quantity = 1;
    this.cartItems.push(item);
  }
}
  
  increaseQuantity(index: number) {
  if (!this.cartItems[index].quantity) {
    this.cartItems[index].quantity = 1;
  }

  this.cartItems[index].quantity++;
}

decreaseQuantity(index: number) {
  if (!this.cartItems[index].quantity) {
    this.cartItems[index].quantity = 1;
  }

  if (this.cartItems[index].quantity > 0) {
    this.cartItems[index].quantity--;
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
    let total =0;
    
    for (let item of this.cartItems) 
      {
       total += Number(item.price) *  (item.quantity || 1);
      }
        total += this.customPizzaPrice;

    return total;
  }
}