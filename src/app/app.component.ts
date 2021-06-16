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
  //outputCartNumber:number=0;

  inputCartNumber:number=0;
  cartService:CartServiceService;
  constructor(cs:CartServiceService) {
    this.cartService=cs;
   }

  /*getCartNumberFromCart(eventEmitterValue:number){
    this.outputCartNumber = eventEmitterValue;
    console.log("app : "+ this.outputCartNumber);
  }*/

  getCartNumber():number{
    this.inputCartNumber=this.cartService.getCartNumber();
    return this.inputCartNumber;
  }

}
