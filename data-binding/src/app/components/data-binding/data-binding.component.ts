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

  getValue() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }
}
