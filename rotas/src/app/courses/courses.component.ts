import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from '../interfaces/Courses';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses!: Course[];
  page!: number;
  querySubscription!: Subscription;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe((params) => {
      this.page = params['page'];
    });

    this.courses = this.coursesService.getCourses();
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.router.navigate(['/courses'], { queryParams: { page: this.page } });
    }
  }

  nextPage(): void {
    this.page++;
    this.router.navigate(['/courses'], { queryParams: { page: this.page } });
  }
}
