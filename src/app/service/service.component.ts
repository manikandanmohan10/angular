import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html', 
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor(public service: VariableService){}
  public name = this.service.myVar;
  public isHidden = true
  onChange(){
    this.isHidden = !this.isHidden;
  }

  onUpdate(){
    this.name = Math.random()
    // this.lifecycle.ref = 78
    
  }

}
