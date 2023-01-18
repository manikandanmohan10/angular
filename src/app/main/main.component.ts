import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public childData: any;
  public parentData: any;

  updateChildData(paretnValue: any){
    this.childData = paretnValue.value;
  }
  
  updateParentData(event: any){
    this.parentData = event
  }
}
