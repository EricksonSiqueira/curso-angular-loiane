import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { ICourse } from '../interfaces/course';

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.coursesService.getById(id)),
        catchError(() => {
          this.alertModalService.showAlert(
            `The course with passed ID was not found.`,
            'danger',
            4000
          );
          this.router.navigate(['/courses']);
          return EMPTY;
        })
      )
      .subscribe((course) => this.updateForm(course));

    this.form = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      id: [null],
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
        .edit(this.form.value)
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

  updateForm(course: ICourse) {
    this.form.patchValue({
      id: course.id,
      name: course.name,
    });
  }
}
