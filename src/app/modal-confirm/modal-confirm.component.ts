import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalConfirmService } from '../modal-confirm.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalConfirmComponent implements OnInit {
  message;
  private callbackYes;
  private callbackNo;

  constructor(private modalConfirmService: ModalConfirmService) {
  }

  ngOnInit() {
    this.modalConfirmService.registerModal(this);
  }

  setMessage(message: string) {
    this.message = message;
  }

  setCallbackYes(callback) {
    this.callbackYes = callback;
  }

  setCallbackNo(callback) {
    this.callbackNo = callback;
  }

  doYes() {
    this.toggle();
    if (this.callbackYes) this.callbackYes();
  }

  doNo() {
    this.toggle();
    if (this.callbackNo) this.callbackNo();
  }

  toggle() {
  }


}
