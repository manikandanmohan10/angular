import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  public arr: any[] = [];
  // subscription: Subscription;
    public testing = new Observable((observer) => {
      for(let i=0; i<10; i++){observer.next(i)}
      observer.next('Hey')
    });

    public testingSubscription = this.testing.subscribe({
      next(value){
        console.log(value)
        if (value === 5){
          console.log('un')
          // this.testingSubscription.unsubscribe();
        }
      }
    })
}








