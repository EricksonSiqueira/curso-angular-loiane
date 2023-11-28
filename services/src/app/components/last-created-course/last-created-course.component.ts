import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-last-created-course',
  templateUrl: './last-created-course.component.html',
  styleUrls: ['./last-created-course.component.scss'],
})
export class LastCreatedCourseComponent implements OnInit {
  course = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.emitCreatedCourse.subscribe(
      (course) => (this.course = course)
    );
  }
}
