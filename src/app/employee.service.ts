import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url_: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  /** Going to use this method in test component */
    getEmployees(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this.url_);
                      /** .catch(this.errorHandler); */
  }

  /** Error Handler 
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }*/
} 
