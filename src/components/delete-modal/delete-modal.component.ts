import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  @Input() data: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close();
  }

  deleteItem() {
    this.delete.emit(this.data.id);
    this.closeModal();
  }
}
