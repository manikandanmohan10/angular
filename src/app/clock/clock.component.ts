import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
//  templateUrl: './clock.component.html',
  template: `
    {{myTimer()}}
  `,
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
//  public time: any;
  constructor(){}
  myTimer(): any {
    const date = new Date().toLocaleTimeString();
    return date
  }
  public time = setInterval(()=>{
    this.myTimer()}, 1000
  )
}
