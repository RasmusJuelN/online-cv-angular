import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements OnInit {
  @Input() revealSpeed: 'slow' | 'medium' | 'fast' = 'medium';
  @Input() delay: number = 0;
  @Input() translateY: number = 50; // Default translate value
  @HostBinding('class.revealed') isRevealed = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialStyles();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isRevealed = true;
            this.renderer.setStyle(this.el.nativeElement, 'transition', `all ${this.getSpeedDuration()} ease-in-out ${this.delay}s`);
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement);
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(${this.translateY}px)`);
  }

  private getSpeedDuration(): string {
    switch (this.revealSpeed) {
      case 'fast':
        return '1s';
      case 'medium':
        return '2s';
      case 'slow':
        return '3s';
      default:
        return '2s';
    }
  }
}
