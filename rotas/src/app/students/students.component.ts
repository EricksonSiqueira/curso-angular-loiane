import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { IStudent } from '../interfaces/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  students: IStudent[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }
}
