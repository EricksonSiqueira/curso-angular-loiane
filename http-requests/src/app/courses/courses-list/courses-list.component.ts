import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses$!: Observable<ICourse[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.list();
  }

  ngOnDestroy(): void {}
}
