import { Component } from '@angular/core';

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
}
