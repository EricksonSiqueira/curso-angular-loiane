import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsNotFoundComponent } from './students-not-found/students-not-found.component';
import { StudentsGuard } from '../guards/students.guard';

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivateChild: [StudentsGuard],
    children: [
      { path: 'new', component: StudentsFormComponent },
      { path: 'not-found', component: StudentsNotFoundComponent },
      { path: ':id', component: StudentsDetailsComponent },
      { path: ':id/edit', component: StudentsFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
