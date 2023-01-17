import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor(private route: Router) { }

  toA(){
    this.route.navigate(['/a'])
  }

  toB(){
    this.route.navigate(['/b'])
  }

  toC(){
    this.route.navigate(['/c'])
  }

}
