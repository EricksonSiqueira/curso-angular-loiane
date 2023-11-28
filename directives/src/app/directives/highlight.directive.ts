import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private bgColor: string = 'white';

  @HostListener('mouseenter') onMouseOver() {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.bgColor;
  }

  constructor() {}

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }
}
