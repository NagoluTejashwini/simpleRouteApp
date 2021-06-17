import { ProductServiceService } from './../product-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopComponent } from './laptop.component';
import { ProductDetails } from '../product-details';

describe('LaptopComponent', () => {
  let component: LaptopComponent;
  let fixture: ComponentFixture<LaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopComponent ],
      imports:[HttpClient, HttpClientModule],
      providers:[ProductServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get laptop list from endpoint', () => {

    let mockdata:ProductDetails[] = [];
  
       expect(component.getAllLaptops()).toEqual(mockdata);
    });
});
