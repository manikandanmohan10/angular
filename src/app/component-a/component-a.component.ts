import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  public msg: any;
  public message: any;
  messages: any[] = [];
    subscription: Subscription;

    constructor(private messageService: SubjectService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message) {
                console.log(message)
                this.messages.push(message);
                this.msg = message
            } else {
                // clear messages when empty message received
                this.messages = [];
            }
        });
    }
    sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.subject_.next(this.message);
  }
    
} 
