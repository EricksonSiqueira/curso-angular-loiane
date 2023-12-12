import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

type AlertType = 'success' | 'danger' | 'warning';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private bsModalService: BsModalService) {}

  showAlert(
    message: string,
    type: AlertType = 'warning',
    dismissTimeout?: number
  ) {
    const bsModalRef: BsModalRef =
      this.bsModalService.show(AlertModalComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showConfirm(
    title: string,
    bodyMsg: string,
    closeTxt?: string,
    confirmTxt?: string
  ) {
    const bsModalRef: BsModalRef = this.bsModalService.show(
      ConfirmModalComponent
    );
    bsModalRef.content.title = title;
    bsModalRef.content.bodyMsg = bodyMsg;

    if (closeTxt) {
      bsModalRef.content.closeTxt = closeTxt;
    }
    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
