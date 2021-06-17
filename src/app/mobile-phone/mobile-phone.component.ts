import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';
import { CartServiceService } from './../cart-service.service';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css']
})
export class MobilePhoneComponent implements OnInit {

  productService:ProductServiceService;
  cartService:CartServiceService;

  constructor(lp:ProductServiceService,cs:CartServiceService) {
    this. productService=lp;
    this.cartService=cs;
   }

  ngOnInit(): void {
  }

  /*getAllMobiles():ProductDetails[]{
    console.log("laptop");
    return this.productService.getAllMobiles();
  }*/

  addToCart(mobile:ProductDetails){
    this.cartService.addToCart(mobile);
  }
}
