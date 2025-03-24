import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,RouterOutlet,RouterLink],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
 message:string='';
   receiveData(response:string){
    this.message=response;
   }
   greet:string="hello";
   state:string[]=["Telangana","Maharashtra","AP","TamilNadu"];
   city:string[]=["Hyd","Mumabi","Amaravati","Chennai"];
}
