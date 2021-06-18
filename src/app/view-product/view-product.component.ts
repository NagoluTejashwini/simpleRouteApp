
import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  
  productname:string;
  laptop !: ProductDetails;
  constructor(private activatedRouter:ActivatedRoute, private  productService:ProductServiceService) {
    this.productname = this.activatedRouter.snapshot.params['productname'];
    this.getProductDetails(this.productname);
   }

  ngOnInit(): void {
  }

  getProductDetails(byName:string)
  {
    this.productService.getLaptopByName(byName).subscribe(data=>{
      this.laptop = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }
}
