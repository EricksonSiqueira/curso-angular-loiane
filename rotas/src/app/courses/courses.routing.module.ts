import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

const coursesRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'course-not-found', component: CourseNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
