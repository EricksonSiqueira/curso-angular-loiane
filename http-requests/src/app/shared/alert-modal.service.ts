import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

type AlertType = 'success' | 'danger' | 'warning';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private bsModalService: BsModalService) {}

  showAlert(message: string, type: AlertType = 'warning') {
    const bsModalRef: BsModalRef =
      this.bsModalService.show(AlertModalComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
  }
}
