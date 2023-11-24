import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent {
  name = '';

  person: Person = {
    age: 20,
    name: 'John',
  };
}
