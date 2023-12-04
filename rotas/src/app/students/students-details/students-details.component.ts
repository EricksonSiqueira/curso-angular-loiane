import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss'],
})
export class StudentsDetailsComponent implements OnInit, OnDestroy {
  student!: IStudent;
  subscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      const foundStudent = data?.['student'];

      if (foundStudent === undefined) {
        this.router.navigate(['/students/not-found']);
      } else {
        this.student = foundStudent;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
