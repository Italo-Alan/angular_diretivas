import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent {
  ativo = false;
  tamanhoFonte = 10;

  changeStatus(){
    this.ativo = !this.ativo;
  }
}
