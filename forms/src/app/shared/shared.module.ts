import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFieldComponent } from './error-field/error-field.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorFieldComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [
    ErrorFieldComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  providers: [DropdownService],
})
export class SharedModule {}
