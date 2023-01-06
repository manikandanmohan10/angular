import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <!-- String properties -->
    <h3> {{name | lowercase}} </h3>
    <h3> {{name | uppercase}} </h3>
    <h3> {{message | titlecase}} </h3>
    <h3> {{person | json}} </h3>
    <h3> {{name | slice:2:5}} </h3>
    <h3> {{name | lowercase}} </h3>

    <!-- Number properties -->
    <h3> {{5.678 | number:'1.2-3'}} </h3>
    <h3> {{5.678 | number:'3.4-5'}} </h3>
    <h3> {{5.678 | number:'2.1-2'}} </h3>

    <h3> {{0.24 | percent}} </h3>

    <h3> {{0.24 | currency}} </h3>
    <h3> {{0.24 | currency:'INR'}} </h3>
    <h3> {{0.24 | currency:'INR':'code'}} </h3>

    <!-- Date pipe -->
    <h3> {{date}} </h3>
    <h3> {{date | date:'short'}} </h3>
    <h3> {{date | date:'shortDate'}} </h3>
    <h3> {{date | date:'shortTime'}} </h3>
    <h3> {{date | date:'medium'}} </h3>
    <h3> {{date | date:'mediumDate'}} </h3>
    <h3> {{date | date:'mediumTime'}} </h3>
    <h3> {{date | date:'long'}} </h3>
    <h3> {{date | date:'longDate'}} </h3>
    <h3> {{date | date:'longTime'}} </h3>

  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name = 'Angular';
  public message = 'welocme to Angular';
  public person = {
    "firstName": "Manikandan",
    "lastName": "Mohan"
  };
  public date = new Date();
}
