import { MyClass } from './my-class';
import { ProductDetails } from './product-details';

describe('MyClass', () => {
  it('should create an instance', () => {
    expect(new MyClass()).toBeTruthy();
  });
  it('should create formatted name', () => {
    expect(new MyClass().doThings('Ramesh')).toBe('[Ramesh]');
  });

  it('should create an instance', () => {
    expect(new MyClass().doStringWorks('Ramesh@gmail.com')).toBe('gmail.com');
  });

  it('should create an product output', () => {
    let mockOutput:ProductDetails={productId:1,
      productName:'Hp-123',
      productCost:45000,
      productCategory:'Laptop'}
    expect(new MyClass().getProduct()).toEqual(mockOutput);
  });
});
