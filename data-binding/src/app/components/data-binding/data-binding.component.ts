import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  url = 'http://loiane.com';
  angularCourse = true;
  imageUrl = 'https://picsum.photos/200/300';

  actualInputValue = '';
  savedValue = '';
  isMouseOver = false;

  name = '';

  person: Person = {
    age: 20,
    name: 'John',
  };

  courseName = 'loiane course';
  otherCourseName = 'loiane course v2.2';

  getValue() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  onKeyUp(event: KeyboardEvent) {
    this.actualInputValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value: string) {
    this.savedValue = value;
  }

  buttonClicked() {
    return alert('Button clicked!');
  }

  onMouseOverAndOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueHasChanged(event: any) {
    console.log(event.newValue);
  }
}
