import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-test',
  template: `<input type='text' [placeholder]=test>
            <h1 [class]='myIdS'> Success </h1>
            <h1 [class]='myIdD'> Danger </h1>
            <h2 *ngFor="let emp of employees"> {{emp.id}}-{{emp.name}} {{emp.age}} </h2> 
            `,  
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public test = 'hello';
  public myIdS = 'success'
  public myIdD = 'danger';

  public employees: any = [];

  constructor(private _employeeService: EmployeeService){ }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data)
  }

}
