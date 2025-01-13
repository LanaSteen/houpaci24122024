import { Component } from '@angular/core';
import { ThemeService } from '../common/services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { SubscriberService } from '../common/services/subscriber.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, 
           ReactiveFormsModule, FloatLabelModule,
            InputTextModule, DialogModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isDarkMode?: boolean;
  constructor(private themeService: ThemeService, private subscriberService: SubscriberService){
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }

  emailAddress? : string | null;
  alertVisible :boolean = false;
  alertText : string =  "";
  alertHeader : string = "";
  // subscribe(){
  //   this.emailAddress= null;
  // }

  subscribe(): void {
    if (this.emailAddress) {
      this.subscriberService.addSubscriber(this.emailAddress).subscribe(
        (newSubscriber:any) => {
          console.log('Subscriber added:', newSubscriber);
          this.emailAddress = ''; 
          this.alertText = "Thank you for subscribing!"
          this.alertVisible = true;
          this.alertHeader = "Success!"
        },
        (error:any) => {
          console.error('Error adding subscriber:', error);
                  this.alertText = "Could not subscribe, try later!"
                  this.alertVisible = true;
                  this.alertHeader = "Error!"
        }
      );
    } else {
      console.error('Email is required');
      alert('Please enter a valid email address.');
    }
  }
}
