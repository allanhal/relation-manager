import { Injectable } from '@angular/core';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Injectable()
export class ModalConfirmService {

  private modal: ModalConfirmComponent;
  
    constructor() {
    }
  
    registerModal(newModal: ModalConfirmComponent): void {
      this.modal = newModal;
    }
  
    toggle(): void {
      this.modal.toggle();
    }
  
    setMessage(message: string) {
      this.modal.setMessage(message)
    }
  
    setCallbackYes(callback) {
      this.modal.setCallbackYes(callback);
    }
  
    setCallbackNo(callback) {
      this.modal.setCallbackNo(callback);
    }

}
