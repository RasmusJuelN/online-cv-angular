import { Component, Input, OnInit } from '@angular/core'; // Import OnInit
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent { // Implement OnInit

  constructor(private sanitizer: DomSanitizer) { }
  getSafeSvg(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  @Input() svgContent: string = '';
  @Input() title: string ="";
  @Input() text: any | undefined;
  @Input() isEven: boolean = false;


}
