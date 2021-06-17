import { CartServiceService } from './cart-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleRouteApp';
  name:string="Ramesh";
  
  inputCartNumber:number=0;

  cartService:CartServiceService;
  
  constructor(cs:CartServiceService) {
    this.cartService=cs;
   }

  

  getCartNumber():number{
    this.inputCartNumber=this.cartService.getCartNumber();
    return this.inputCartNumber;
  }

}
