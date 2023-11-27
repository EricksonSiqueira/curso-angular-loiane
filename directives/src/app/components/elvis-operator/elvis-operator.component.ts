import { Component } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss'],
})
export class ElvisOperatorComponent {
  task: any = {
    description: 'Get to work!',
    responsable: null,
  };
}
