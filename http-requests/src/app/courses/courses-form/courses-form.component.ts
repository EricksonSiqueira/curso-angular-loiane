import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss'],
})
export class CoursesFormComponent implements OnInit {
  form!: FormGroup;
  submited = false;

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit(): void {
    this.submited = true;
    if (this.form.valid) {
      this.coursesService
        .save(this.form.value)
        .pipe(
          catchError((error) => {
            this.alertModalService.showAlert(
              'An error occurred while creating the course! Please try again later.',
              'danger',
              4000
            );
            return EMPTY;
          })
        )
        .subscribe(() => {
          this.alertModalService.showAlert(
            'Course created successfully!',
            'success',
            2000
          );
          this.router.navigate(['/courses']);
        });
    }
  }

  onCancel() {
    this.submited = false;
    this.form.reset();
  }
}
