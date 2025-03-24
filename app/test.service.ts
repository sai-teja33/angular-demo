import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  colors:string[]=["Black","white","red","green","blue"]
}
