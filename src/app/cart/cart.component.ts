import { ProductDetails } from './../product-details';
import { CartServiceService } from './../cart-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
 // @Output() cartNumber = new EventEmitter<number>();
  @Input()  cartNumber1:number = 0;
  cartService:CartServiceService;
  constructor(cs:CartServiceService) {
    this.cartService=cs;
   }
  ngOnInit(): void {
  }

  getAllCartProducts(){
    let num = this.cartService.getCartNumber();
    //this.cartNumber.emit(num);
    console.log("cart"+num);
    return this.cartService.getCartProducts();
  }

}
