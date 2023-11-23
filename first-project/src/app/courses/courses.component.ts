import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  portalName: string;

  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.portalName = 'https://loiane.training/';
    this.courses = this.coursesService.getCourses();
  }
}
