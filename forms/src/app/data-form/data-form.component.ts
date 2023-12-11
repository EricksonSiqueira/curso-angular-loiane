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
import { Observable } from 'rxjs';
import { Role } from '../shared/models/role';
import { Technology } from '../shared/models/technology';
import { NewsletterOp } from '../shared/models/newsletter';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  form!: FormGroup;
  // states!: BrazilianState[];
  states!: Observable<BrazilianState[]>;
  roles!: Role[];
  techs!: Technology[];
  newsletterOp!: NewsletterOp[];

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

    // this.dropdownService.getBrazilianStates().subscribe((data) => {
    //   this.states = data as BrazilianState[];
    // });

    this.states = this.dropdownService.getBrazilianStates();
    this.roles = this.dropdownService.getRoles();
    this.techs = this.dropdownService.getTechnologies();
    this.newsletterOp = this.dropdownService.getNewsletter();

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

      role: [''],
      techs: [''],
      newsletter: ['yes'],
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

  setRole() {
    const role = {
      name: 'Developer',
      lvl: 'Senior',
      description: 'experienced developer',
    };
    this.form.get('role')?.setValue(role);
  }

  compareRoles(obj1: Role, obj2: Role) {
    return obj1 && obj2
      ? obj1.name === obj2.name && obj1.lvl === obj2.lvl
      : obj1 === obj2;
  }

  setTechs() {
    this.form.get('techs')?.setValue(['Java', 'JavaScript']);
  }
}
