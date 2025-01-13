import { Component } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { SubscriberComponent } from "../subscriber/subscriber.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SubscriberComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router, ) {}



  logout() {
    
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
