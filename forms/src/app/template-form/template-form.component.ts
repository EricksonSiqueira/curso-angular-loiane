import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  user: any = {
    name: 'Erickson',
    email: 'erickson@email.com',
  };

  onSubmit(form: any) {
    console.log(form);

    console.log(this.user);
  }
}
