import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../interfaces/Courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  id!: string;
  subscription!: Subscription;
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];

      const courseFound = this.coursesService.getCourse(+this.id);

      if (courseFound === null) {
        this.router.navigate(['/course-not-found']);
        return;
      }

      this.course = this.coursesService.getCourse(+this.id)!;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
