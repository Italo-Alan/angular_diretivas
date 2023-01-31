import { Directive, HostListener, HostBinding, Input } from '@angular/core';
@Directive({
  selector: '[appHightlight]'
})

export class HightlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.background-color') backgroundColor: string | undefined;

  @Input() defaultColor = '#FFF';
  @Input() highlightColor = '#FFFF00';

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
