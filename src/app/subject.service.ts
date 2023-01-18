import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject = new Subject();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  getMessage(){
    return this.subject.asObservable();
  }

  clearMessages() {
    this.subject.next('');
  }

  public subject_ = new Subject();

}
