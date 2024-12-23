import { Component } from '@angular/core';
import { ThemeService } from './common/services/theme.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  constructor(private themeService: ThemeService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
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


