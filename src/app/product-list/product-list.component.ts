import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product.service';
import { Product } from '../Models/product.model';
import { ThemeService } from '../common/services/theme.service';
import { PaginatorModule } from 'primeng/paginator'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  paginatedProducts: Product[] = [];  // Make it mutable by removing readonly
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isDarkMode?: boolean;
  constructor(private productService: ProductService, private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      console.log(this.isDarkMode)
    });
  }

  // ngOnInit(): void {
  //   this.loadProducts();
  // }

  // loadProducts(): void {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.products = products;
  //   });
  // }

  // get paginatedProducts() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.products.slice(startIndex, endIndex);
  // }

  setPage(page: number): void {
    this.currentPage = page;
  }


  // products: Product[] = [];
  // paginatedProducts: Product[] = [];
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
    this.first = event.first;  // Starting index of the page
    this.rows = event.rows;    // Number of rows per page
    this.paginateData();       // Call to update the displayed data based on pagination
  }
}
