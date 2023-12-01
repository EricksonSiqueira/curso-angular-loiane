import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesService } from './courses.service';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
  imports: [CommonModule, CoursesRoutingModule],
  exports: [CoursesComponent],
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CourseNotFoundComponent,
  ],
  providers: [CoursesService],
})
export class CoursesModule {}
