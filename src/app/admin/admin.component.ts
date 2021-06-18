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
  productService:ProductServiceService;*/
  
  productDetails:ProductDetails = new ProductDetails(0,'',0,'');
  updateDetails:ProductDetails = new ProductDetails(0,'',0,'');
  updatedProduct:ProductDetails = new ProductDetails(0,'',0,'');

  createProductDetails:ProductDetails = new ProductDetails(0,'',0,'');
 
  constructor(private productService:ProductServiceService) {}

  ngOnInit(): void {
  }
 
  onSubmit()
  {
    console.log(this.productDetails);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.productService.insertLaptop(this.productDetails).subscribe(
      data=>{
        this.createProductDetails = data;
        console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

  doUpdate(){
    console.log(this.updateDetails);
    this.doUpdateOnServer();
  }

  doUpdateOnServer()
  {
    console.log(this.updateDetails)
    this.productService.updateLaptop(this.updateDetails)
        .subscribe(data=>{
          this.updatedProduct = data;
          console.log(" Data Updted !!! "+this.updatedProduct.productName+" cost "+ this.updatedProduct.productCost);
        },
        error=>console.log(error)
        );
  }
}
