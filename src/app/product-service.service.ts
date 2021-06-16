
import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  laptopArray:ProductDetails[] = [];
  cameraArray:ProductDetails[] = [];
  mobileArray:ProductDetails[]= [];
  constructor() { }

  addProduct(product:ProductDetails){
    if(product.productCategory == 'Laptop'){
      this.laptopArray.push(product);
      console.log(this.laptopArray.length);
    }
    else if(product.productCategory == 'Camera'){
      this.cameraArray.push(product);
      console.log(this.cameraArray.length);
    }
    else{
      this.mobileArray.push(product);
      console.log(this.mobileArray.length);
    }
  }
  
  getAllLaptops():ProductDetails[]{
    console.log("inside service laptop"+this.laptopArray.length);
    return this.laptopArray;
  }

  getAllCameras():ProductDetails[]{
    console.log("inside service camera"+this.cameraArray.length);
    return this.cameraArray;
  }

  getAllMobiles():ProductDetails[]{
    console.log("inside service mobile"+this.mobileArray.length);
    return this.mobileArray;
  }
}
