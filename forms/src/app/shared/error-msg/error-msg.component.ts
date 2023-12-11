import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
})
export class ErrorMsgComponent implements OnInit {
  @Input() formControl!: FormControl;
  @Input() label!: string;

  constructor() {}

  ngOnInit() {}

  get errorMsg() {
    for (const propertyName in this.formControl.errors) {
      if (
        this.formControl.errors.hasOwnProperty(propertyName) &&
        this.formControl.touched
      ) {
        return FormValidations.getErrorMsg(
          this.label,
          propertyName,
          this.formControl.errors[propertyName]
        );
      }
    }

    return null;
  }
}
