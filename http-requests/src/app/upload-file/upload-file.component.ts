import { Component, OnDestroy } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { EMPTY, Subscribable, Subscription, catchError, take } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnDestroy {
  files: Set<File> = new Set();
  sub: Subscription = new Subscription();

  constructor(
    private uploadFileService: UploadFileService,
    private alertModalService: AlertModalService
  ) {}

  onChange(event: any): void {
    [...event.srcElement.files].forEach((file) => {
      this.files.add(file);
    });
  }

  onUpload() {
    if (this.files.size > 0) {
      this.sub = this.uploadFileService
        .upload(this.files, 'http://localhost:8000/upload')
        .pipe(
          catchError(() => {
            this.alertModalService.showAlert(
              'Upload error, please try again later.',
              'danger',
              4000
            );
            return EMPTY;
          })
        )
        .subscribe(() => {
          this.alertModalService.showAlert(
            'Successfully uploaded files!',
            'success',
            3000
          );
        });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
