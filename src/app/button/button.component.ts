import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonClass: string = ''; // CSS class for additional styling
  @Input() routerLink: any[] | any;
  @Input() fragment: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();


  
}
