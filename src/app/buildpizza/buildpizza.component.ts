import { Component,OnInit} from '@angular/core';
import { BuildpizzaService } from '../services/buildpizza.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})

export class BuildpizzaComponent implements OnInit {
  buildpizzaList:any[]=[];
  totalPrice:number=0;
  hasPizza: boolean = false;


  constructor(private buildpizzaService:BuildpizzaService,private cartService: CartService) { }
  ngOnInit(): void
   {
    this.getBuildPizza();
     this.hasPizza = this.cartService.hasPizza();
  }
  getBuildPizza()
  {
    this.buildpizzaService.pizzabuild().subscribe(
    (data:any[]) =>
    {
      this.buildpizzaList= data;
    }
  );
  }
  buildPizza() {
    this.cartService.addCustomPizzaPrice(this.totalPrice);
    }
  
  
    calculateTotalPrice(event:any,price:number,topping:string)
  {
    if(event.target.checked)
    {
      this.totalPrice+=price;
    
    }
    else
    {
      this.totalPrice-=price;
    }
  }
}
