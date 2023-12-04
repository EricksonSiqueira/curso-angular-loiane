import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StudentsDetailsComponent } from '../students-details/students-details.component';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/interfaces/Student';
import { StudentsService } from '../students.service';

@Injectable()
export class StudentResolver implements Resolve<IStudent> {
  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IStudent | Observable<IStudent> | Promise<IStudent> {
    const id = route.params['id'];

    return this.studentsService.getStudentById(+id)!;
  }
}
