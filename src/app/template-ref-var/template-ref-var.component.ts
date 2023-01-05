import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  template: `
    <input #myInput type="text">
    <input (click)="logMessage(myInput.value)" type="submit" value="LOG">
    `,
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent {
  logMessage(value: any){
    console.log(value)
    alert(value)
  }
}
