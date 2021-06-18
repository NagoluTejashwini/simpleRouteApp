import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';

import { ViewProductComponent } from './view-product.component';

describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;
  let productService:ProductServiceService;
  let activatedRouter:ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductComponent ],
      imports:[ HttpClientModule,
        RouterModule.forRoot([]),],
      providers:[ProductServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.inject(ProductServiceService);
    activatedRouter = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('get laptop product by name', () => {

    let mockResponse:ProductDetails = {productId:1,productName:'HP', productCost:45000,productCategory:'Laptop'};

    let mockName:string = mockResponse.productName;
    
    let actualResponse:ProductDetails= new ProductDetails(0,'',0,'');
    
     spyOn(productService, 'getLaptopByName').and.returnValue(of(mockResponse));
     productService.getLaptopByName(mockName).subscribe(data=>{
      actualResponse = data;
    });

       expect(mockResponse).toEqual(actualResponse);
    });

});
