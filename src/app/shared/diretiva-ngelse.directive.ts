import { Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDiretivaNgelse]'
})
export class DiretivaNgelseDirective {

  @Input() set ngElse(condition: boolean){
    //Com o if normalmente verificamos a veracidade, já com o else normalmente queremos negar algo
    if(!condition){
      //Renderiza a view embutida no template
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }else{
      //Caso a condição seja verdadeira, com o clear() ele acaba destruindo o elemento.
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ){

  }
}
