import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
  
  <h1> ngIf </h1>


  <!-- First Type -->

    <h3 *ngIf='displayName; else elseBlock'>
      Structural Directives (ngIf)
    </h3>

    <ng-template #elseBlock>
      <h3>
        Name is hidden
      </h3>
    </ng-template>

    <!-- Second Type -->

    <div *ngIf="displayName; then thenBlock; else elseBlock">  </div>
    <ng-template #thenBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>


    <h1> ngSwitch </h1>

    <div [ngSwitch]="color"> 
      <h3 *ngSwitchCase="'red'" [style.color]="color"> You picked red </h3>
      <h3 *ngSwitchCase="'violet'" [style.color]="color"> You picked violet </h3>
      <h3 *ngSwitchCase="'pink'" [style.color]="color"> You picked pink </h3>
      <h3 *ngSwitchDefault> Pick Again </h3>
    </div>


    <h1> ngFor </h1>
    <div *ngFor="let color of colors; index as i; first as f; last as l">
      <h4> firstValue-{{f}} | lastValue-{{l}} | {{i}} | {{color}}</h4>
    </div>   

    `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  // ngIf
  public displayName = false
  public color = "pink1"

  public colors = ['red', 'violet', 'skyblue', 'green']
} 
