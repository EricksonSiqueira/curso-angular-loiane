import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.bgColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'white';
  }

  // @HostBinding('style.backgroundColor') bgColor!: string;

  @HostBinding('style.backgroundColor') get setColor() {
    return this.bgColor;
  }

  private bgColor: string = 'white';

  constructor() {}
}
