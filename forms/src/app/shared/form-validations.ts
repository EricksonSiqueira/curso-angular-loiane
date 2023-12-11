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

  static cepValidator(control: AbstractControl) {
    const cep = control.value;

    if (cep) {
      const validateCep = /^[0-9]{8}$/;

      return validateCep.test(cep) ? null : { invalidCep: true };
    }

    return null;
  }
}
