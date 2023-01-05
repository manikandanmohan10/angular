import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
  <!-- First Type -->

    <h2 *ngIf='displayName; else elseBlock'>
      Structural Directives (ngIf)
    </h2>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
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

    `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  // ngIf
  public displayName = false

} 
