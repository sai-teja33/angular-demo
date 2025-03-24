import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
   @ViewChild('txt') textbox?:ElementRef;
   @ViewChild(AlertComponent) alertcomp?:AlertComponent;
ngAfterViewInit(): void {
  const value=this.textbox?.nativeElement.value;
  console.log(value)
  const alert=this.alertcomp?.alert;
  console.log(alert);
  
}
}
