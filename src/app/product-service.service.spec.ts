import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductServiceService } from './product-service.service';
import { ProductDetails } from './product-details';

describe('ProductServiceService', () => {
 
  let productWebService:ProductServiceService;
  let httpMock:HttpClientTestingModule;
  let httpTestController:HttpTestingController;

  let contextPath:string = 'http://localhost:9001'; 

  let endPoint_getAllLaptops:string = contextPath+'/api/laptops';
  let endPoint_insertLaptop:string = contextPath+'/api/add';
  let endPoint_updateLaptop:string = contextPath+'/api/update';
  let endPoint_getLaptopByName:string = contextPath+'/api/productName';
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
   

   it('should add an laptop and return it', () => {
    let mockResponse:ProductDetails = {productId:1, productName:'HP-123', productCost:45000, productCategory:'Laptop'};

    let actualResponse:ProductDetails;
    productWebService.insertLaptop(mockResponse).subscribe(
      data => {
        actualResponse = data;
        expect(mockResponse).toEqual(actualResponse);
      });

    // addEmploye should have made one request to POST employee
    const testReq =  httpTestController.expectOne(endPoint_insertLaptop);
    expect(testReq.request.method).toEqual('POST');
    testReq.flush(mockResponse);
 
     expect(testReq.request.responseType).toEqual('json');
      // Finally, assert that there are no outstanding requests.
     httpTestController.verify();
  });

  it('should update an laptop and return it', () => {
    let mockResponse:ProductDetails = {productId:1, productName:'HP-123', productCost:45000, productCategory:'Laptop'};

    let actualResponse:ProductDetails;
    productWebService.updateLaptop(mockResponse).subscribe(
      data => {
        actualResponse = data;
        expect(mockResponse).toEqual(actualResponse);
      });

    // addEmploye should have made one request to POST employee
    const testReq =  httpTestController.expectOne(endPoint_updateLaptop);
    expect(testReq.request.method).toEqual('PUT');
    testReq.flush(mockResponse);
 
     expect(testReq.request.responseType).toEqual('json');
      // Finally, assert that there are no outstanding requests.
     httpTestController.verify();
  });

  const EXPECTED_NUMBER_OF_ITEMS: number = 3;
  
  it('ProductService Laptop testing by product name', () => {
    let mockResponse:ProductDetails = {productId:1,productName:'HP-123', productCost:45000,productCategory:'Laptop'};

    let mockString:string = mockResponse.productName;
    let actualResponse:ProductDetails;
    productWebService.getLaptopByName(mockString).subscribe(
           data=>
           {
             actualResponse=data;
               expect(actualResponse.productName).toBe(mockString);
           });
     
           const testReq = httpTestController.expectOne(endPoint_getLaptopByName+ '/' + mockString);
           expect(testReq.request.method).toEqual('GET');
 
   // Respond with mock data, causing Observable to resolve.
   // Subscribe callback asserts that correct data was returned.
     testReq.flush(mockResponse);
 
     expect(testReq.request.responseType).toEqual('json');
      // Finally, assert that there are no outstanding requests.
     httpTestController.verify();
   });//end of it
   
});
