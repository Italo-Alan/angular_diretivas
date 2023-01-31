import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //Podemos definir que essa diretiva seja adicionada apenas à alguma tag da forma abaixo
  selector: 'button[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  //Aqui fazemos a injeção de dependências
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    //Na documentação do Angular, é dito para se evitar o uso, devido o fato de ataques XXS. Sendo assim, tendo o renderer2 como melhor prática
    // this._elementRef.nativeElement.style.backgroundColor= "#FFFF00";

    //O Renderer2 faz a mesma coisa que a de cima, apesar de ser mais verboso, faz de forma segura e seguindo as boas práticas.
      this._renderer.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        '#FFFF00'
        );
  }

}
