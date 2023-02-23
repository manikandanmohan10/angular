import { Component } from '@angular/core';
import { VariableService } from '../variable.service';
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';
import { DiService } from '../di.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor(public service: VariableService, private di: DiService){}
  public name = this.service.myVar;
  public isHidden = true
  public data: any;

  depInj(){
    this.data = this.di.data
  }

  onChange(){
    this.isHidden = !this.isHidden;
  }

  onUpdate(){
    this.depInj()
    this.name = Math.random()
    // this.lifecycle.ref = 78

  }
}
