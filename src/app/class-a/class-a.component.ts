import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TriangleService } from '../triangle.service';

@Component({
  selector: 'app-class-a',
  template: `
    <h2> Component A </h2>
    <button> <a (click)="toB()"> Component B </a> </button> 
    <button> <a (click)="toC()"> Component C </a> </button> 

  `,
  styleUrls: ['./class-a.component.css']
})
export class ClassAComponent {
  // constructor(private route: Router){}
  constructor(private triangle: TriangleService){ }

  toB(){
    this.triangle.toB()
  }
  toC(){
    this.triangle.toC()
  }
}
