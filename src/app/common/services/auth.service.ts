import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ADMIN_USERNAME = 'admin';
  private readonly ADMIN_PASSWORD = '0000';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private cookieService: CookieService) {}

  login(username: string, password: string): boolean {
    if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
      this.cookieService.set(this.TOKEN_KEY, 'admin-token', 1); // ერთი დღე
      return true;
    }
    return false;
  }

  logout(): void {
    this.cookieService.delete(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return this.cookieService.check(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_KEY);
  }
}
