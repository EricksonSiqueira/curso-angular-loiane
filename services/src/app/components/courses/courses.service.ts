import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  emitCreatedCourse = new EventEmitter<string>();
  static newCourseWasCreated = new EventEmitter<string>();

  private courses: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {}

  getCourses(): string[] {
    this.logService.consoleLog('Obtaining courses...');
    return this.courses;
  }

  addCourse(course: string) {
    this.courses.push(course);
    this.logService.consoleLog(`Course ${course} added.`);
    this.emitCreatedCourse.emit(course);
  }
}
