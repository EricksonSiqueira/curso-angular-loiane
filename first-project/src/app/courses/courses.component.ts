import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  portalName: string;

  courses: string[] = ['Java', 'Ext JS', 'AngularJS'];

  constructor() {
    this.portalName = 'https://loiane.training/';
  }
}
