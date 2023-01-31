import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {
  //Por ser um meta dado precisa ser declarado dessa forma, assim podendo escutar um evento(mouseenter)
  //E preciso também chamar um método, podendo ser qualquer nome, sendo importante o meta dado e o nome do evento escutado.

  //Podemos fazer essa mudança sem ter que ficar alterando o tempo inteiro o style do Element. Que é o meta dado HostBinding
  @HostListener('mouseenter') onMouseOver(){
    /*  this._renderer.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        '#000'
    */

  this.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') onMouseLeave(){
  /*  this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      '#FFF'
  */

    this.backgroundColor = "#FFF";
  }

  @HostBinding('style.background-color') backgroundColor: string | undefined;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) {
  }

}
