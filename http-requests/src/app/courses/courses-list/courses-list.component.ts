import { Component, OnInit, ViewChild } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
    private coursesService: CoursesService,
    private alertModalService: AlertModalService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
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
    this.selectedCourse = course;

    this.deleteModalRef = this.modalService.show(this.deleteCourseModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete() {
    this.coursesService
      .delete(this.selectedCourse?.id!)
      .pipe(
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
    this.deleteModalRef.hide();
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
    this.selectedCourse = null;
  }
}
