import { Component, OnInit, ViewChild } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { EMPTY, Observable, Subject, catchError, switchMap, take } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CrudService } from 'src/app/shared/crud.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses$!: Observable<ICourse[]>;
  error$ = new Subject<boolean>();

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteCourseModal') deleteCourseModal: any;

  selectedCourse: ICourse | null = null;

  constructor(
    private coursesService: CrudService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {
    this.coursesService.setApiUrl(`${environment.API}courses`);
  }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.courses$ = this.coursesService.list<ICourse>().pipe(
      catchError(() => {
        this.handleError();
        return EMPTY;
      })
    );
  }

  handleError() {
    this.alertModalService.showAlert(
      'Error loading courses, please try again later.',
      'danger'
    );
  }

  onEdit(id: number) {
    this.router.navigate(['courses/edit', id]);
  }

  onDelete(course: ICourse) {
    const result$ = this.alertModalService.showConfirm(
      'Delete course',
      'Are you sure that you want to delete this course?'
    );

    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.coursesService.delete(course.id!) : EMPTY
        ),
        catchError(() => {
          this.alertModalService.showAlert(
            'Error deleting course, please try again later.',
            'danger',
            3000
          );
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.alertModalService.showAlert('Course deleted!', 'success');
        this.onRefresh();
      });
  }
}
