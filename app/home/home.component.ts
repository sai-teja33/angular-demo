import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse.pipe';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReversePipe,FormsModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'demo';
  name='Nama Sai Teja';
  city='Hyderabad';
  salary=21000;
  info={"role":"intern"}
  date=new Date();
  type='text'
  showAlert(message:string){
    alert(message);
  }
}
