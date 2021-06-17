import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  laptopArray:ProductDetails[] = [];
  cameraArray:ProductDetails[] = [];
  mobileArray:ProductDetails[]= [];
 
  private address = 'http://localhost:9001';
  private getAllLaptop_endpoint = this.address+'/api/laptops';
  private getAllCamera_endpoint = this.address+'/api/cameras';

  constructor(private http:HttpClient) { }

  

  getAllLaptopList():Observable<ProductDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<ProductDetails[]>(`${this.getAllLaptop_endpoint}`);
  }

  getAllCameraList():Observable<ProductDetails[]>
  {
    console.log('Product Service Camera - Get Instructor called ');
    return this.http.get<ProductDetails[]>(`${this.getAllCamera_endpoint}`);
  }

 /* getProductByname():Observable<ProductDetails>{
    console.log('Product Service by name - Get Instructor called ');

  }*/
}
