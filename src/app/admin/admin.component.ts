import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  productModel:ProductDetails = new ProductDetails('',0,'');

  laptop:ProductDetails[] = [];
  camera:ProductDetails[] = [];
  ngOnInit(): void {
  }
  onSubmit(product:ProductDetails)
  {
    if(product.productCategory=='Laptop'){
      this.laptop.push(product);
    }
    else{
      this.camera.push(product);
    }
  }

  getAllLaptops(){
    return this.laptop;
  }
}
