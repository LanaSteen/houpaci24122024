import { Component } from '@angular/core';
import { ThemeService } from '../common/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FloatLabelModule, InputTextModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isDarkMode?: boolean;
  constructor(private themeService: ThemeService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      console.log(this.isDarkMode)
    });
  }

  emailAddress? : string | null;
  subscribe(){
    console.log(this.emailAddress)
    this.emailAddress= null;
  }
}
