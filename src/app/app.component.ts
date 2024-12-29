import { Component } from '@angular/core';
import { ThemeService } from './common/services/theme.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
// https://jsonplaceholder.typicode.com/guide/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule,     
    HeaderComponent,   
    FooterComponent    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'houpaci';
  isDarkMode?: boolean;
  showFooter = true;  
  constructor(private themeService: ThemeService, private router: Router){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const currentRoute = this.router.url;
      this.showFooter = !(currentRoute.includes('/admin') || currentRoute.includes('/login'));
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  toggleMode() {
    this.themeService.toggleDarkMode();
  }
}


