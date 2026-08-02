import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit { 
  pizzaList: any[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getPizza();
  }


getPizza()
{
  this.orderService.getPizza().subscribe(
    (data: any[]) => {
   //console.log(data);
      this.pizzaList = data;
    }
  );
}
} 
