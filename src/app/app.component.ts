import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  /** Sending this value from parent(App) component to child(component_interaction) component */
  public myName = 'Manikandan';
  public message = "";
}
