import { NgModule } from '@angular/core';

import { StudentsComponent } from './students.component';
import { CommonModule } from '@angular/common';
import { StudentsFormComponent } from './students-form/students-form.component';
import { FormsModule } from '@angular/forms';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, StudentsRoutingModule],
  exports: [StudentsComponent, StudentsFormComponent],
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsDetailsComponent,
  ],
  providers: [],
})
export class StudentsModule {}
