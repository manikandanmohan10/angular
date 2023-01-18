import { Component } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  public subject = new Subject();
  constructor () {}

  // addItem(item: any) {
  //   const li = document.createElement("li");
  //   const text = document.createTextNode(item);
  //   li.appendChild(text);
  //   document.getElementsByClassName("parent")[0].appendChild(li);
  // }

  // ngOnInit(){
  //   this.subject.subscribe((res)=>{
  //     this.addItem('1: ' + res)
  //   })
  //   this.subject.next("First");
  //   this.subject.subscribe((res)=>{
  //     this.addItem('2: ' + res)
  //   })
  //   this.subject.next("Second");
  // }
  // this.subject.next('event 0');
}
// const subject = new Subject();

// subject.next('event 0')
// subject.subscribe(event => alert(event))

// // subject.next('event 1')
// // subject.next('event 2')
// // subject.next('event 3')

// const behaviourSubject = new BehaviorSubject('event-1');

// behaviourSubject.next('event 0')
// behaviourSubject.subscribe(event => alert(event))

// behaviourSubject.next('event 1')