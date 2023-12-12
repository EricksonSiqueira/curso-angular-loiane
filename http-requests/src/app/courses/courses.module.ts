import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesFormComponent,
    CoursesFormComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, ReactiveFormsModule],
})
export class CoursesModule {}
