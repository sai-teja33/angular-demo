import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Output() data=new EventEmitter<string>();
    toParent(){
      this.data.emit("Hello from child");
    }
    @Input() items:string[]=[];
}
