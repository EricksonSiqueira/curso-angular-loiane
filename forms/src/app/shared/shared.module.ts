import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFieldComponent } from './error-field/error-field.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [ErrorFieldComponent, FormDebugComponent, ErrorMsgComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ErrorFieldComponent, FormDebugComponent, ErrorMsgComponent],
  providers: [DropdownService],
})
export class SharedModule {}
