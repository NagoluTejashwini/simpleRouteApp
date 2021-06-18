import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let productService:ProductServiceService;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[ HttpClientModule],
      providers:[ProductServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService=TestBed.inject(ProductServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('insert laptop product', () => {

    let mockResponse:ProductDetails = {productId:1,productName:'HP', productCost:45000,productCategory:'Laptop'};

    let actualResponse:ProductDetails = new ProductDetails(0,'',0,'');

     spyOn(productService, 'insertLaptop').and.returnValue(of(mockResponse));
     productService.insertLaptop(mockResponse).subscribe(data=>{
      actualResponse = data;
    });

       expect(mockResponse).toEqual(actualResponse);
    });

it('update laptop product', () => {

    let mockResponse:ProductDetails = {productId:1,productName:'HP', productCost:45000,productCategory:'Laptop'};

    let actualResponse:ProductDetails = new ProductDetails(0,'',0,'');
    
     spyOn(productService, 'updateLaptop').and.returnValue(of(mockResponse));
     productService.updateLaptop(mockResponse).subscribe(data=>{
      actualResponse = data;
    });

       expect(mockResponse).toEqual(actualResponse);
    });

});
