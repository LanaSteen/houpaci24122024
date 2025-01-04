
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product.model';
import { ProductService } from '../common/services/product.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../common/services/theme.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product?: Product;
  isDarkMode?: boolean;
  constructor(   
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private themeService: ThemeService, 
    private router: Router
  ){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      // console.log(this.isDarkMode)
    });
  }
  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProducts().subscribe((products) => {
        this.product = products.find((prod) => prod.id == productId);
        // console.log(this.product)
      });
    }
  }
  navigateToProduct(){
    this.router.navigate(['/product']); 
  }
}
