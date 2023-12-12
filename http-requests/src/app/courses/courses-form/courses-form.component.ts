import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { ICourse } from '../interfaces/course';
import { CrudService } from 'src/app/shared/crud.service';

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
    private coursesService: CrudService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const course = this.route.snapshot.data['course'];

    this.form = this.formBuilder.group({
      id: [course.id],
      name: [
        course.name,
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
          catchError(() => {
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

  onUpdate() {
    this.submited = true;
    if (this.form.valid) {
      this.coursesService
        .edit<ICourse>(this.form.value['id'], this.form.value)
        .pipe(
          catchError(() => {
            this.alertModalService.showAlert(
              'An error occurred while editing the course! Please try again later.',
              'danger',
              4000
            );
            return EMPTY;
          })
        )
        .subscribe(() => {
          this.alertModalService.showAlert(
            'Course edited successfully!',
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

  hasCourse() {
    return !!this.form.get('id')?.value;
  }
}
