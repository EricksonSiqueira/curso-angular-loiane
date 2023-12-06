import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { ErrorFieldComponent } from '../error-field/error-field.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    ErrorFieldComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class TemplateFormModule {}
