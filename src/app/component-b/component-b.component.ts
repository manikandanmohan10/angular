import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {
  public msg: any;
  public message: any;
  messages: any[] = [];
    subscription: Subscription
  constructor(private messageService: SubjectService) {
    this.subscription = this.messageService.subject_.subscribe(message => {
      if (message) {
          console.log(message)
          this.messages.push(message);
          this.message = message
      } else {
          // clear messages when empty message received
          this.messages = [ ];
      }
  });
  }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage(this.msg);
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }
}
