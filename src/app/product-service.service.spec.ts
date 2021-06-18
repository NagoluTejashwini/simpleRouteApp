import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductServiceService } from './product-service.service';
import { ProductDetails } from './product-details';

describe('ProductServiceService', () => {
 
  let productWebService:ProductServiceService;
  let httpMock:HttpClientTestingModule;
  let httpTestController:HttpTestingController;

  let contextPath:string = 'http://localhost:9001'; 

  let endPoint_getAllLaptops:string = contextPath+'/api/laptops'
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ProductServiceService],
      imports:[HttpClientTestingModule]
    });
    productWebService = TestBed.inject(ProductServiceService);
    httpMock = TestBed.inject(HttpClientTestingModule);
    httpTestController = TestBed.inject(HttpTestingController);
    
  
  });

  it('should be created', () => {
    expect(productWebService).toBeTruthy();
  });


  it('ProductService Laptop testing', () => {
    let mockdata:ProductDetails[] = [{productId:1,productName:'HP', productCost:45000,productCategory:'Laptop'},
    {productId:2,productName:'HP', productCost:45000,productCategory:'Laptop'}];

    let actualResponse:ProductDetails[]=[];
    productWebService.getAllLaptopList().subscribe(
           data=>
           {
               actualResponse = data;
               expect(mockdata).toEqual(actualResponse);
           });
     
           const testReq = httpTestController.expectOne(endPoint_getAllLaptops);
           expect(testReq.request.method).toEqual('GET');
 
   // Respond with mock data, causing Observable to resolve.
   // Subscribe callback asserts that correct data was returned.
     testReq.flush(mockdata);
 
     expect(testReq.request.responseType).toEqual('json');
      // Finally, assert that there are no outstanding requests.
     httpTestController.verify();
   });//end of it
   
});
