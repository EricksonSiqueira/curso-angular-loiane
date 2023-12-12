import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses$!: Observable<ICourse[]>;
  error$ = new Subject<boolean>();

  constructor(
    private coursesService: CoursesService,
    private alertModalService: AlertModalService,
    private router: Router
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
}
