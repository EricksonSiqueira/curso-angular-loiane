import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses$!: Observable<ICourse[]>;
  error$ = new Subject<boolean>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        return EMPTY;
      })
    );

    this.coursesService.list().subscribe((data) => {
      console.log(data);
    });
  }
}
