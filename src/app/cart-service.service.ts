import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartNumber:number=0;
  cartProducts:ProductDetails[]=[];
  constructor() { }

  addToCart(product:ProductDetails){
    this.cartProducts.push(product);
    this.cartNumber = this.cartProducts.length;
    console.log(this.cartNumber);
  }
  
  getCartNumber(){
    return this.cartNumber;
  }

  getCartProducts(){
    return this.cartProducts;
  }
}
