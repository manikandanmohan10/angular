import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: FormsServiceService) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    let data = this.loginForm.value;
    this.service.sendLoginData(data);
  }
}
