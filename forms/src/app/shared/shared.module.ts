import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFieldComponent } from './error-field/error-field.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [ErrorFieldComponent, FormDebugComponent],
  imports: [CommonModule],
  exports: [ErrorFieldComponent, FormDebugComponent],
})
export class SharedModule {}
