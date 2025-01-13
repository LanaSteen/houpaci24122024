import { Component } from '@angular/core';
import { Subscriber } from '../Models/subscriber.model';
import { SubscriberService } from '../common/services/subscriber.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscriber',
  standalone: true,
  imports: [CommonModule,HttpClientModule, TableModule, IconFieldModule, 
          InputIconModule,ButtonModule, DialogModule, FormsModule],
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.scss'
})
export class SubscriberComponent {
  subscribers: Subscriber[] = [];
  selectedSubscribers: Subscriber[] = []; 
  editDialogVisible: boolean = false;
  selectedSubscriber: Subscriber = { id: '', email: '' };
  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {
    this.subscriberService.getSubscribers().subscribe((data: Subscriber[]) => {
      this.subscribers = data;
    });
  }

  editSubscriber(subscriber: Subscriber): void {
    // console.log('Editing subscriber:', subscriber);
    
    this.editDialogVisible = true;
    this.selectedSubscriber = subscriber;
 
  }

    closeDialog(): void {
      this.editDialogVisible = false;
    }

    saveSubscriber(): void {
      if (this.selectedSubscriber.email) {
        this.subscriberService.updateSubscriber(this.selectedSubscriber).subscribe((updatedSubscriber) => {

          const index = this.subscribers.findIndex(sub => sub.id === updatedSubscriber.id);
          if (index !== -1) {
            this.subscribers[index] = updatedSubscriber;
          }
          this.closeDialog(); 
        });
      }

  }

  deleteSubscriber(id: string): void {
    this.subscriberService.deleteSubscriber(id).subscribe(
      () => {
        this.subscribers = this.subscribers.filter(sub => sub.id !== id);
        // console.log('Subscriber deleted successfully');
      },
      (error) => {
        console.error('Error deleting subscriber:', error);
      }
    );
  }
  deleteSelected(){
    this.selectedSubscribers.forEach(element => {
      this.deleteSubscriber(element.id)
    });
  }

}