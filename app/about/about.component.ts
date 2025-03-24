import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { CommonModule } from '@angular/common';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AlertComponent,CommonModule,],
  providers:[TestService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // constructor(private router:Router){

  // }
  //  gotoContact(){
  // this.router.navigateByUrl("contact")
  //  }
  cs:any;
  constructor(private ts:TestService){
    this.cs=this.ts.colors;
  }

}
