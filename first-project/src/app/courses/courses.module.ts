import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [CoursesComponent, CourseDetailsComponent],
  imports: [CommonModule],
  exports: [CoursesComponent, CourseDetailsComponent],
  providers: [CoursesService],
})
export class CoursesModule {}
