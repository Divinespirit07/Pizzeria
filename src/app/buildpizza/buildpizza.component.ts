import { Component,OnInit} from '@angular/core';
import { BuildpizzaService } from '../services/buildpizza.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})

export class BuildpizzaComponent implements OnInit {
  
  buildpizzaList:any[]=[];
totalPrice:number=0;
  constructor(private buildpizzaService:BuildpizzaService) { }
  ngOnInit(): void
   {
    this.getBuildPizza();
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
  calculateTotalPrice(event:any,price:number)
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
