import { Component } from '@angular/core';
import { ThemeService } from '../common/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode?: boolean;
  constructor(private themeService: ThemeService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      console.log(this.isDarkMode)
    });
  }
}
