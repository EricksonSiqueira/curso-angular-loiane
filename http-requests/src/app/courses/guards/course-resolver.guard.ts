import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { CrudService } from 'src/app/shared/crud.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<ICourse> {
  constructor(private coursesService: CrudService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourse> {
    if (route.params && route.params['id']) {
      const courseId = route.params['id'];
      return this.coursesService.getById<ICourse>(courseId);
    }

    return of({
      id: null,
      name: null,
    } as ICourse);
  }
}
