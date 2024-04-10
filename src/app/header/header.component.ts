import { Component , Input} from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() heading: string = 'Online CV'
  menuOpen = false;
  constructor(private router: Router, private scrollService: ScrollService) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  goToHome() {
    this.scrollService.currentHomeSection.subscribe(section => {
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  goToContact() {
    this.scrollService.currentContactSection.subscribe(section => {
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // navigateToContact() {
  //   // navigate to a dummy fragment
  //   this.router.navigate(['/home'], { fragment: 'd' }).then(() => {
  //     // then navigate to the actual fragment
  //     this.router.navigate(['/home'], { fragment: 'contact' });
  //   });
  // }

  // navigateToHome() {
  //   // navigate to a dummy fragment
  //   this.router.navigate(['/home'], { fragment: 'd' }).then(() => {
  //     // then navigate to the actual fragment
  //     this.router.navigate(['/home'], { fragment: 'home' });
  //   });
  // }

}

