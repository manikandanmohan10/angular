import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2> Department List </h2>
    <ul style="list-style-type: none">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <span> {{dept.id}} </span> {{dept.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  departments = [
    {"id": "1", "name": "CSE"},
    {"id": "2", "name": "MECH"},
    {"id": "3", "name": "EEE"},
    {"id": "4", "name": "ECE"},
    {"id": "5", "name": "CIVIL"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) {}

  public selectedId: any;

  onSelect(department: any){
    /** this.router.navigate(['/departments', department.id]) */
    this.router.navigate([department.id], {relativeTo: this.route})
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id');
      this.selectedId = id;
    })
  }

  isSelected(department: any){
    return department.id === this.selectedId;
  }

}
