import { NgModule } from '@angular/core';

import { StudentsComponent } from './students.component';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form/students-form.component';
import { FormsModule } from '@angular/forms';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsService } from './students.service';
import { StudentsNotFoundComponent } from './students-not-found/students-not-found.component';
import { StudentsDeactivateGuard } from '../guards/students-deactivate.guard';
import { StudentResolver } from './guards/student-detail.resolver';

@NgModule({
  imports: [CommonModule, FormsModule, StudentsRoutingModule],
  exports: [StudentsComponent, StudentsFormComponent],
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsDetailsComponent,
    StudentsNotFoundComponent,
  ],
  providers: [StudentsService, StudentsDeactivateGuard, StudentResolver],
})
export class StudentsModule {}
