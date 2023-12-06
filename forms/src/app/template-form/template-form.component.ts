import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

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
  }

  consultCEP(cep: string, form: any) {
    const treatedCep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.http
        .get(`https://viacep.com.br/ws/${treatedCep}/json/`)
        .subscribe((data: any) => {
          console.log(data);
          this.populateForm(data, form);
        });
    }
  }

  populateForm(data: any, form: any) {
    form.form.patchValue({
      address: {
        cep: data.cep,
        complement: data.complemento,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      },
    });
  }
}
