import { Injectable } from '@angular/core';
import { Product } from '../../Models/product.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 


  private products: Product[] = [
    {id: 1, title: 'Product 1', description: 'Description of product 1', picturePath: '../../../assets/productImages/product1.jpg' },
    {id: 2, title: 'Product 2', description: 'Description of product 2', picturePath: '../../../assets/productImages/product2.jpg' },
    {id: 3, title: 'Product 3', description: 'Description of product 3', picturePath: '../../../assets/productImages/product3.jpg' },
    {id: 4, title: 'Product 4', description: 'Description of product 4', picturePath: '../../../assets/productImages/product4.jpg' },
    {id: 5, title: 'Product 5', description: 'Description of product 5', picturePath: '../../../assets/productImages/product5.jpg' },
    {id: 6, title: 'Product 6', description: 'Description of product 6', picturePath: '../../../assets/productImages/product6.jpg' },
    {id: 7, title: 'Product 7', description: 'Description of product 7', picturePath: '../../../assets/productImages/product7.jpg' },
    {id: 8, title: 'Product 8', description: 'Description of product 8', picturePath: '../../../assets/productImages/product8.jpg' },
    {id: 9, title: 'Product 9', description: 'Description of product 9', picturePath: '../../../assets/productImages/product9.jpg' },
    {id: 10, title: 'Product 10', description: 'Description of product 10', picturePath:'../../../assets/productImages/product10.jpg' },
    {id: 11, title: 'Product 11', description: 'Description of product 11', picturePath:'../../../assets/productImages/product11.jpg' },
    {id: 12, title: 'Product 12', description: 'Description of product 12', picturePath:'../../../assets/productImages/product12.jpg' },
    {id: 13, title: 'Product 13', description: 'Description of product 13', picturePath:'../../../assets/productImages/product13.jpg' },
    {id: 14, title: 'Product 14', description: 'Description of product 14', picturePath:'../../../assets/productImages/product14.jpg' },

  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);  
  }
  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id)); 
  }
}
