import { Component } from '@angular/core';
import { ThemeService } from '../common/services/theme.service';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../common/services/gallery.service';
import { Gallery } from '../Models/gallery.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode?: boolean;
  constructor(private themeService: ThemeService, private galleryService: GalleryService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
    this.galleryService.getGallery().subscribe((galleryData) => {
      this.imageGroups = galleryData; 
      console.log(this.imageGroups)
    });
  }

  imageGroups: Gallery[] = []
  ngOnInit(): void {
    
  }
}
