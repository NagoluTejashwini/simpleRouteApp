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
  private insertLaptop_endpoint = this.address+'/api/add';
  private getAllLaptop_endpoint = this.address+'/api/laptops';
  private getAllCamera_endpoint = this.address+'/api/cameras';
  private update_endpoint = this.address+'/api/update';
  private getProduct_endPoint = this.address +'/api/productName'

  constructor(private http:HttpClient) { }

  
  insertLaptop(laptop:ProductDetails):Observable<ProductDetails>{
    console.log('Instructor Service - Create Instructor called ');
    return this.http.post<ProductDetails>(`${this.insertLaptop_endpoint}`, laptop);  
  }

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
  updateLaptop(laptop:ProductDetails):Observable<ProductDetails>
  {
    //http://localhost:9001/jpa/trainer/784/location/Pune}

    return this.http.put<ProductDetails>(`${this.update_endpoint}`,laptop);
  }

  getLaptopByName(productName:string):Observable<ProductDetails>{
    
    return this.http.get<ProductDetails>(`${this.getProduct_endPoint}/${productName}`);
  }
}
