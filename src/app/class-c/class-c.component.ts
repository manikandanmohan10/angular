import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TriangleService } from '../triangle.service';

@Component({
  selector: 'app-class-c',
  template: `
    <h2> Component C </h2>
    <button> <a (click)="toA()"> Component A </a> </button> 
    <button> <a (click)="toB()"> Component B </a> </button> 

  `,
  styleUrls: ['./class-c.component.css']
})
export class ClassCComponent {
  constructor(private triangle: TriangleService){}

  toB(){
    this.triangle.toB();
  }
  toA(){
    this.triangle.toA();
  }
}
