import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { ErrorFieldComponent } from '../error-field/error-field.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    TemplateFormComponent,
    ErrorFieldComponent,
    ErrorFieldComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class TemplateFormModule {}
