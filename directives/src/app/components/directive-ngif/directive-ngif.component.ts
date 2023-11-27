import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.scss'],
})
export class DirectiveNgifComponent {
  courses = ['Angular 2'];

  showCourses = false;

  onShowCourses = () => {
    this.showCourses = !this.showCourses;
  };
}
