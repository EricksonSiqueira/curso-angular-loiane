import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { BrazilianState } from '../shared/models/brazilian-state';
import { CepService } from '../shared/services/cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  form!: FormGroup;
  states!: BrazilianState[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    // });

    this.dropdownService.getBrazilianStates().subscribe((data) => {
      this.states = data as BrazilianState[];
    });

    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: ['', Validators.required],
        number: ['', Validators.required],
        complement: [''],
        street: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.http
        .post('https://httpbiaaan.org/post', JSON.stringify(this.form.value))
        .subscribe(
          (data: any) => {
            console.log(data);
            this.form.reset();
          },
          (error) => alert('erro')
        );
    } else {
      console.log('form invalido');
      this.verifyFormValidation(this.form);
    }
  }

  verifyFormValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.verifyFormValidation(control);
      }
    });
  }

  isEmailValid() {
    let field = this.form.get('email');
    if (field?.errors) {
      return field.errors['email'] && field.touched;
    }
    return false;
  }

  verifyValidTouched(field: string) {
    return (
      (this.form.get(field)?.invalid && this.form.get(field)?.touched) || false
    );
  }

  applyCssError(field: string) {
    return {
      'is-invalid': this.verifyValidTouched(field),
    };
  }

  consultCEP() {
    const cep = this.form.get('address.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.getCep(cep)?.subscribe((data) => {
        this.populateForm(data);
      });
    }
  }

  populateForm(data: any) {
    this.form.patchValue({
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
