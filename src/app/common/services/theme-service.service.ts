import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private _darkMode = new BehaviorSubject<boolean>(false);
  public darkMode$ = this._darkMode.asObservable();
  
  constructor() { }

  toggleDarkMode() {
    this._darkMode.next(!this._darkMode.value);
  }
}
