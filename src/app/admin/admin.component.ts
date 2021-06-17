import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /*productModel:ProductDetails = new ProductDetails(0,'',0,'');
  productService:ProductServiceService;
  
  constructor(lp:ProductServiceService) {
    this. productService=lp;
   }*/

  ngOnInit(): void {
  }
 
  /*onSubmit()
  {
    console.log(this.productModel.productName);
    //this.productService.addProduct(this.productModel);
  }*/

}
