import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TriangleService } from '../triangle.service';

@Component({
  selector: 'app-class-b',
  template: `
    <h2> Component B </h2>
    <button> <a (click)="toA()"> Component A </a> </button> 
    <button> <a (click)="toC()"> Component C </a> </button> 

  `,
  styleUrls: ['./class-b.component.css']
})
export class ClassBComponent {
  constructor(private triangle: TriangleService) {}

  toA(){
    this.triangle.toA();
  }
  toC(){
    this.triangle.toC();
  }
}
