import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2 [style.color]="'violet'"> Style Binding </h2>
    <h2 style='color:yellow'> Style Binding </h2>
    <h2 [ngStyle]='titleStyle'> Style Binding </h2>
    `,
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  public titleStyle = {
    color: '#500444',
    fontStyle: 'italic'

  }
}
