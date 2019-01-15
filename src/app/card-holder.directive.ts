import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer
} from '@angular/core';

@Directive({
  selector: '.appCardHolder'
})
export class CardHolderDirective {
  @HostBinding('class.border-primary') private ishovering: boolean; 1

  constructor(private el: ElementRef, private renderer: Renderer) {
    // el.nativeElement.style.backgroundColor = 'gray';
  }

  @HostListener('mouseover')
  onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout')
  onmouseout() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
