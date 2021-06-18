import { CartServiceService } from './../cart-service.service';
import { ProductServiceService } from './../product-service.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

 
  laptops !: ProductDetails[];
 
  constructor(private productService:ProductServiceService, 
    private cartService:CartServiceService) {
      this.getAllLaptops();
   }

  ngOnInit(): void {
   
  }

  
  addToCart(laptop:ProductDetails){
    console.log("added to cart");
    this.cartService.addToCart(laptop);
  }
  
 getAllLaptops()
  {
    this.productService.getAllLaptopList().subscribe(data=>{
        this.laptops = data;
        //console.log(this.laptops);
    },
    err=>
    {
      console.log(err.error);
    }
    
    );
    //console.log(this.laptops.length);
   
  }
  
}
