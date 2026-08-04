import { Component,OnInit} from '@angular/core';
import { BuildpizzaService } from '../services/buildpizza.service';
import { CartService } from '../services/cart.service';

export interface build{
  id: string;
  type: string;
  price: number;
  tname: string;
  image: string;
  description: string;
  ingredients: string[];
  topping: string[];
  quantity?: number;
}
@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})


export class BuildpizzaComponent implements OnInit {
  
  buildpizzaList:build[]=[];
  totalPrice=0;
  hasPizza = false;


  constructor(private buildpizzaService:BuildpizzaService,private cartService: CartService) { }
  ngOnInit(): void
   {
    this.getBuildPizza();
     this.hasPizza = this.cartService.hasPizza();
  }
  getBuildPizza()
  {
    this.buildpizzaService.pizzabuild().subscribe(
    (data:build[]) =>
    {
      this.buildpizzaList= data;
    }
  );
  }
  buildPizza() {
    this.cartService.addCustomPizzaPrice(this.totalPrice);
    }
  
  
    calculateTotalPrice(event:Event,price:number)
  {
    if(event.target)
    {
      this.totalPrice+=price;
    
    }
    else
    {
      this.totalPrice-=price;
    }
  }
}
