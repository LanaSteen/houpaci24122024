import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gallery } from '../../Models/gallery.model' 



@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private gallery: Gallery[] = [
    {
      imgSlides: [
        '../../../assets/gallery/1.jpg',
        '../../../assets/gallery/2.jpg',
        '../../../assets/gallery/3.jpg',
        '../../../assets/gallery/4.jpg',
        '../../../assets/gallery/15.jpg',
      ],
    },
    {
      imgSlides: [
        '../../../assets/gallery/5.jpg',
        '../../../assets/gallery/6.jpg',
        '../../../assets/gallery/7.jpg',
        '../../../assets/gallery/8.jpg',
        '../../../assets/gallery/14.jpg',
      ],
    },
    {
      imgSlides: [
        '../../../assets/gallery/9.jpg',
        '../../../assets/gallery/10.jpg',
        '../../../assets/gallery/11.jpg',
        '../../../assets/gallery/12.jpg',
        '../../../assets/gallery/13.jpg',
      ],
    },
  ];

  constructor() {}

  getGallery(): Observable<Gallery[]> {
    return of(this.gallery); 
  }
}
