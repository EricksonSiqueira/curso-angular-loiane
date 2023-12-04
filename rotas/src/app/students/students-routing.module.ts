import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsNotFoundComponent } from './students-not-found/students-not-found.component';
import { StudentsGuard } from '../guards/students.guard';
import { StudentsDeactivateGuard } from '../guards/students-deactivate.guard';
import { StudentResolver } from './guards/student-detail.resolver';

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivateChild: [StudentsGuard],
    children: [
      {
        path: 'new',
        component: StudentsFormComponent,
        canDeactivate: [StudentsDeactivateGuard],
      },
      { path: 'not-found', component: StudentsNotFoundComponent },
      {
        path: ':id',
        component: StudentsDetailsComponent,
        resolve: { student: StudentResolver },
      },
      {
        path: ':id/edit',
        component: StudentsFormComponent,
        canDeactivate: [StudentsDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
