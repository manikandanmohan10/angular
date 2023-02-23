import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormsServiceService {
  public url = ENVIRONMENT.api_url
  constructor(private http: HttpClient) { }

  sendRegisterData(data: any) {
    let e = {...data};
    data = {
      "username": e.username,
      "password": e.password,
      "email": e.email,
      "phone_number": e.phone_number
    }

    this.http.post(`${this.url}api/v1/register`, data).subscribe(res => {
        console.log(res);
    });
  }
  sendLoginData(data: any){
    this.http.post(`${this.url}api/v1/login`, data).subscribe((res: any) => {
      console.log(res);
      let token = {
        access: res?.token?.refresh_token,
        refresh: res?.token?.access_token
      }
      sessionStorage.setItem('token', JSON.stringify(token))
    });
  }

}
