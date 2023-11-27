import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[yellowBg]', // only p can use it
})
export class YellowBgDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'; this is not safe
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    ); // use this
  }
}
