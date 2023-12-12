import { Component, OnDestroy } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { EMPTY, Subscribable, Subscription, catchError, take } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal.service';
import { environment } from 'src/environments/environments';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnDestroy {
  files: Set<File> = new Set();
  sub: Subscription = new Subscription();
  uploadProgress = 0;

  constructor(
    private uploadFileService: UploadFileService,
    private alertModalService: AlertModalService
  ) {}

  onChange(event: any): void {
    this.uploadProgress = 0;
    [...event.srcElement.files].forEach((file) => {
      this.files.add(file);
    });
  }

  onUpload() {
    if (this.files.size > 0) {
      this.sub = this.uploadFileService
        .upload(this.files, `${environment.BASE_URL}/upload`)
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
        .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.Response) {
            this.alertModalService.showAlert(
              'Successfully uploaded files!',
              'success',
              3000
            );
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total!);
            this.uploadProgress = percentDone;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
