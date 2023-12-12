import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses!: ICourse[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.list().subscribe((courses) => (this.courses = courses));
  }
}
