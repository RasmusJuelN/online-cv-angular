import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() heading: string = 'Online CV'

  constructor(private router: Router) { }

  navigateToContact() {
    // navigate to a dummy fragment
    this.router.navigate(['/home'], { fragment: 'd' }).then(() => {
      // then navigate to the actual fragment
      this.router.navigate(['/home'], { fragment: 'contact' });
    });
  }

  navigateToHome() {
    // navigate to a dummy fragment
    this.router.navigate(['/home'], { fragment: 'd' }).then(() => {
      // then navigate to the actual fragment
      this.router.navigate(['/home'], { fragment: 'home' });
    });
  }

}

