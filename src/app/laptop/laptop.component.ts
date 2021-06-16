import { CartServiceService } from './../cart-service.service';
import { ProductServiceService } from './../product-service.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

 
  productService:ProductServiceService;
  cartService:CartServiceService;
  
  constructor(lp:ProductServiceService, cs:CartServiceService) {
    this. productService=lp;
    this.cartService=cs;
   }

  ngOnInit(): void {
  }

  getAllLaptops():ProductDetails[]{
    console.log("laptop");
    return this.productService.getAllLaptops();
  }
  
  addToCart(laptop:ProductDetails){
    this.cartService.addToCart(laptop);
  }
  
}
