import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product.service';
import { Product } from '../Models/product.model';
import { ThemeService } from '../common/services/theme.service';
import { PaginatorModule } from 'primeng/paginator'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  paginatedProducts: Product[] = [];  
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isDarkMode?: boolean;
  constructor(
    private productService: ProductService, 
    private themeService: ThemeService, 
    private router: Router) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      console.log(this.isDarkMode)
    });
  }


  setPage(page: number): void {
    this.currentPage = page;
  }

  first: number = 0;
  rows: number = 6;


  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.paginateData();
    });
  }

  paginateData(): void {
    this.paginatedProducts = this.products.slice(this.first, this.first + this.rows);
  }

  onPageChange(event: any): void {
    this.first = event.first;  
    this.rows = event.rows;    
    this.paginateData();     
  }
  goToProductDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]); 
  }
}
