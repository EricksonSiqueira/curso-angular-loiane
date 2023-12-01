import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from 'src/app/interfaces/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss'],
})
export class StudentsDetailsComponent implements OnInit, OnDestroy {
  student!: IStudent;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((param) => {
      const studentFromService = this.studentsService.getStudentById(
        +param['id']
      );

      if (studentFromService === undefined) {
        this.router.navigate(['/students/not-found']);
      }

      this.student = studentFromService!;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
