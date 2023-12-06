import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  user: any = {
    name: null,
    email: null,
  };

  isInvalidTouched(field: any) {
    return !field.valid && field.touched;
  }

  applyErrorCss(field: any) {
    return {
      'is-invalid': field.invalid && field.touched,
    };
  }

  onSubmit(form: any) {
    console.log(form);

    console.log(this.user);
  }
}
