import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses(): Course[] {
    return [
      { name: 'Angular', id: 1 },
      { name: 'Java', id: 2 },
    ];
  }

  getCourse(id: number) {
    const courseFound = this.getCourses().find((course) => course.id === id);

    return courseFound || null;
  }
}
