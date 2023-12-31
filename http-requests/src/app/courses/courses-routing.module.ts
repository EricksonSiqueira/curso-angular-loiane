import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CourseResolver } from './guards/course-resolver.guard';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  {
    path: 'new',
    component: CoursesFormComponent,
    resolve: { course: CourseResolver },
  },
  {
    path: 'edit/:id',
    component: CoursesFormComponent,
    resolve: { course: CourseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
