import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `<h3> You've selected {{departmentId}} </h3>`,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {
  public departmentId: any;
  
  constructor(private route: ActivatedRoute) {
    this.departmentId = this.route.snapshot.params['id'];
  }
}
