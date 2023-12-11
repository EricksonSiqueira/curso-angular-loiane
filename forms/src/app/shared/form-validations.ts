import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

interface Config {
  [key: string]: string;
}
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

  static equalsTo(otherField: string) {
    const validator: ValidatorFn = (formControl: AbstractControl) => {
      if (formControl instanceof FormControl) {
        if (otherField == null) {
          throw new Error('You must inform a field.');
        }
        if (!formControl.root || !(<FormGroup>formControl.root).controls) {
          return null;
        }
        const field = (<FormGroup>formControl.root).get(otherField);

        if (!field) {
          throw new Error('You must inform a valid field.');
        }

        if (field.value !== formControl.value) {
          return { equalsTo: otherField };
        }

        return null;
      }
      throw new Error('formControl is not an instance of FormControl.');
    };
    return validator;
  }

  static getErrorMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      required: `${fieldName} is required.`,
      minlength: `${fieldName} needs at least ${validatorValue.requiredLength} characters.`,
      maxlength: `${fieldName} can have only ${validatorValue.requiredLength} characters.`,
      equalsTo: `${fieldName} has to match with the field ${validatorValue}`,
      invalidCep: `Invalid CEP.`,
    } as Config;

    return config[validatorName];
  }
}
