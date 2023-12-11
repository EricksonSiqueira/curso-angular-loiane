import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CepService } from '../shared/services/cep.service';

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

  constructor(private http: HttpClient, private cepService: CepService) {}

  isInvalidTouched(field: any) {
    return !field.valid && field.touched;
  }

  applyErrorCss(field: any) {
    return {
      'is-invalid': field.invalid && field.touched,
    };
  }

  onSubmit(form: any) {
    this.http
      .post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe((data: any) => {
        form.form.reset();
      });
  }

  consultCEP(cep: string, form: any) {
    if (cep != null && cep !== '') {
      this.cepService.getCep(cep)?.subscribe((data) => {
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
