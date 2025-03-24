import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AlertComponent,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   
}
