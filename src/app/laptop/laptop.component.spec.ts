import { ProductServiceService } from './../product-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopComponent } from './laptop.component';
import { ProductDetails } from '../product-details';
import { of } from 'rxjs';

describe('LaptopComponent', () => {
  let component: LaptopComponent;
  let fixture: ComponentFixture<LaptopComponent>;
  let productService:ProductServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopComponent ],
      imports:[ HttpClientModule],
      providers:[ProductServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    productService = TestBed.inject(ProductServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get laptop list from endpoint', () => {

    let mockdata:ProductDetails[] = [{productId:1,productName:'HP', productCost:45000,productCategory:'Laptop'},
                                      {productId:2,productName:'HP', productCost:45000,productCategory:'Laptop'}];

      let actualResponse:ProductDetails[] = [];
     spyOn(productService, 'getAllLaptopList').and.returnValue(of(mockdata));
     productService.getAllLaptopList().subscribe(data=>{
      actualResponse = data;
    });

       expect(mockdata).toEqual(actualResponse);
    });

    
  

});