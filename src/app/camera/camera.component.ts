import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';
import { CartServiceService } from './../cart-service.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  cameras !: ProductDetails[];
  productService:ProductServiceService;
  cartService:CartServiceService;

  constructor(lp:ProductServiceService,cs:CartServiceService) {
    this.productService=lp;
    this.cartService=cs;
   }

  ngOnInit(): void {
  }
  
  /*getAllCameras():ProductDetails[]{
    console.log("laptop");
    return this.productService.getAllCameras();
  }*/

  addToCart(camera:ProductDetails){
    this.cartService.addToCart(camera);
  }

  getAllCameras()
  {
    this.productService.getAllCameraList().subscribe(data=>{
        this.cameras = data;
    },
    err=>
    {
      console.log(err.error);
    }
    
    );
  }
}
