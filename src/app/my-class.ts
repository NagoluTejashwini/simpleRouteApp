import { ProductDetails } from './product-details';
export class MyClass {

    doThings(name:string):string{
        return '['+name+']';
    }

    doStringWorks(email:string):string{
        let arr = email.split('@');
        let domainName = arr[1];
        return domainName;
    }

    getProduct():ProductDetails{
        let product:ProductDetails={productId:1,
            productName:'Hp-123',
            productCost:45000,
            productCategory:'Laptop'}

            return product;
    }
}
