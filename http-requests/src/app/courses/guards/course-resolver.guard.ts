import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<ICourse> {
  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourse> {
    if (route.params && route.params['id']) {
      const courseId = route.params['id'];
      return this.coursesService.getById(courseId);
    }

    return of({
      id: null,
      name: null,
    } as ICourse);
  }
}
