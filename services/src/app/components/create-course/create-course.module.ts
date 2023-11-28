import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseComponent } from './create-course.component';
import { CoursesService } from '../courses/courses.service';
import { LastCreatedCourseComponent } from '../last-created-course/last-created-course.component';

@NgModule({
  declarations: [CreateCourseComponent, LastCreatedCourseComponent],
  imports: [CommonModule],
  exports: [CreateCourseComponent],
  providers: [CoursesService],
})
export class CreateCourseModule {}
