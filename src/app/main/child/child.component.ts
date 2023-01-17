import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() child: any;
  @Output() parent: EventEmitter<any> = new EventEmitter<any>();

  updateChildData(child: any) {
    this.parent.emit(child.value);
  }
}
