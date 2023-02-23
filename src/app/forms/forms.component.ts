import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsServiceService } from '../forms-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  constructor(private http: HttpClient, private service: FormsServiceService){}
  public isPasswordSame = false;
  public isNameSame = false;

  registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    isPasswordSame: new FormControl(''),
    isNamesame: new FormControl('')
  })

  checkName(){
    let emailName = this.registrationForm.get('email')?.value?.split('@')[0]
    if (this.registrationForm.get('username')?.value == emailName){
      this.isNameSame = true;
    }else{
      this.isNameSame = false;
    }
  }

  checkPassword(){
    console.log(this.registrationForm)
    if (this.registrationForm.get('password')?.value != this.registrationForm.get('confirm_password')?.value){
      this.isPasswordSame = true;
    }else{
      this.isPasswordSame = false;
    }}

  onSubmit(){
    let data = this.registrationForm.value;
    this.service.sendRegisterData(data);
  }
}
