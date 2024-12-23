import { Injectable } from '@angular/core';
import { Product } from '../../Models/product.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 


  private products: Product[] = [
    { title: 'Product 1', description: 'Description of product 1', picturePath: '../../../assets/productImages/product1.jpg' },
    { title: 'Product 2', description: 'Description of product 2', picturePath: '../../../assets/productImages/product2.jpg' },
    { title: 'Product 3', description: 'Description of product 3', picturePath: '../../../assets/productImages/product3.jpg' },
    { title: 'Product 4', description: 'Description of product 4', picturePath: '../../../assets/productImages/product4.jpg' },
    { title: 'Product 5', description: 'Description of product 5', picturePath: '../../../assets/productImages/product5.jpg' },
    { title: 'Product 6', description: 'Description of product 6', picturePath: '../../../assets/productImages/product6.jpg' },
    { title: 'Product 7', description: 'Description of product 7', picturePath: '../../../assets/productImages/product7.jpg' },
    { title: 'Product 8', description: 'Description of product 8', picturePath: '../../../assets/productImages/product8.jpg' },
    { title: 'Product 9', description: 'Description of product 9', picturePath: '../../../assets/productImages/product9.jpg' },
    { title: 'Product 10', description: 'Description of product 10', picturePath:'../../../assets/productImages/product10.jpg' },
    { title: 'Product 11', description: 'Description of product 11', picturePath:'../../../assets/productImages/product11.jpg' },
    { title: 'Product 12', description: 'Description of product 12', picturePath:'../../../assets/productImages/product12.jpg' },
    { title: 'Product 13', description: 'Description of product 13', picturePath:'../../../assets/productImages/product13.jpg' },
    { title: 'Product 14', description: 'Description of product 14', picturePath:'../../../assets/productImages/product14.jpg' },

  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);  
  }
}
