import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<input type='text' [placeholder]=test>
            <h1 [class]='myIdS'> Success </h1>
            <h1 [class]='myIdD'> Danger </h1>
      `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public test = 'hello';
  public myIdS = 'success'
  public myIdD = 'danger';
}
