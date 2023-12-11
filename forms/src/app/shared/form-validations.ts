import { AbstractControl, FormArray } from '@angular/forms';

export class FormValidations {
  static requiredMinCheckbox(min = 1) {
    return (formArray: AbstractControl) => {
      const totalChecked = (<FormArray>formArray).controls.filter(
        (v) => v.value
      ).length;
      return totalChecked >= min ? null : { required: true };
    };
  }
}
