import {  Component, ElementRef, AfterViewInit, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title: any;
  @Input() description: any;
  @Input() skills: string[] | undefined;
  @Input() image: any;

  }

  
  

