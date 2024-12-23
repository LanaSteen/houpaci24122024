import { Routes } from '@angular/router';

// export const routes: Routes = [];
export const routes:Routes = [
    {
      path: '', 
      loadComponent: () => import('./demo/demo.component').then(m => m.DemoComponent)
    },
    {
      path: 'header',  
      loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent)
    },
    {
      path: 'footer', 
      loadComponent: () => import('./footer/footer.component').then(m => m.FooterComponent)
    },
    {
      path: 'home',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'product',
        loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent)
      },
    { 
      path: '', 
      redirectTo: '', 
      pathMatch: 'full' 
    }
  ];