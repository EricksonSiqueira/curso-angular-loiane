import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/Student';

@Injectable()
export class StudentsService {
  private students: IStudent[] = [
    { id: 1, name: 'Student 01', email: 'student01@gmail.com' },
    { id: 2, name: 'Student 02', email: 'student02@gmail.com' },
    { id: 3, name: 'Student 03', email: 'student03@gmail.com' },
  ];

  constructor() {}

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find((student) => student.id === id);
  }

  addStudent(student: IStudent) {
    this.students.push(student);
  }

  updateStudent(newStudent: IStudent): void {
    const studentIndex = this.students.findIndex(
      (student) => student.id === newStudent.id
    );

    if (studentIndex !== -1) {
      this.students[studentIndex] = newStudent;
    } else {
      this.students.push(newStudent);
    }
  }
}
