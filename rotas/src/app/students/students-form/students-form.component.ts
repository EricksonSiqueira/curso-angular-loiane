import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from 'src/app/interfaces/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss'],
})
export class StudentsFormComponent {
  student: IStudent = {
    id: 0,
    name: '',
    email: '',
  };

  test = 'teste';
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

      if (!!param['id'] && !studentFromService) {
        this.router.navigate(['/students/not-found']);
      }

      if (studentFromService === undefined) {
        this.student = {} as IStudent;
      } else {
        this.student = studentFromService;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleStudent() {
    if (!this.student?.id) {
      this.student.id = this.studentsService.getStudents().length + 1;
      this.studentsService.addStudent(this.student);
      this.student = {} as IStudent;
      this.router.navigate(['/students']);
    }

    this.studentsService.updateStudent(this.student);
  }
}
