import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <h1 [style.color]="'#d24fd2'"> {{"Hello " + myName}} </h1>

    <button (click)='fireEvent()'> Send Event </button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {
  /** Getting the input from parent(App) component */
  @Input() public myName: any;
  // @Input('myName') public name: any;

  /** Sending value from child to parent component through event */
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('From App Component')
  }
}
