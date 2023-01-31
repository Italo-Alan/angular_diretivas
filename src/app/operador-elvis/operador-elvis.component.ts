import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent {
  task = {
    description: 'Task description',
    responsible: {
      user: null
    }
  };

}
