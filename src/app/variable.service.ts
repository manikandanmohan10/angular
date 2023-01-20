import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  public myVar: number = 10
  constructor() { }
}
