import { 
  Directive, 
  ElementRef, 
  Input, 
  OnInit, 
  Renderer, 
  HostListener, 
  HostBinding 
} from '@angular/core';

interface RollOverConfig {
  initial?: string,
  over?: string
}

@Directive({
  selector: '[ccRollover]'
})
export class RolloverImageDirective implements OnInit {
  @Input('ccRollover') config: RollOverConfig;
  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('config', this.config);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.config.over);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.config.initial);
  }

  ngOnInit() {
    console.log('config', this.config);
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.config.initial);
  }
  

}
