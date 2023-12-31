import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.scss'],
})
export class ErrorFieldComponent {
  @Input() showError!: boolean;
  @Input() errorText!: string;
}
