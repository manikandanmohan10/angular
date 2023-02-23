import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiService {

  constructor() { }
  data: any[] = [1,2,3,4,5]
}
