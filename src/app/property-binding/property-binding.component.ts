import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <!--This won't work-->
    <input disabled='false' type='text' value='Testing'>
    
    <!--This will work--> 
    <br>Property binding 
    <input [disabled]='isDisabled' type='text' value='Success'>
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  public isDisabled = false;
}
