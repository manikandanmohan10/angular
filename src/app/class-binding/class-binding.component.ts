import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2 [class]="'text-warning'"> Angular... </h2>
    <h2 [ngClass]='myClass'> Angular </h2>
  `,
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  public hasError = false
  public superClass = this.hasError ? false : true
  public myClass = {
    'text-success': !this.hasError,
    'text-warning': this.hasError,
    'text-format': this.superClass
  }
}
