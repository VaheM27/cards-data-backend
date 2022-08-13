import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  @Input() peopleList: any;
  @Input() editType: any;
  @Input() peopleContacts: any;
  @Output() updateItem: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.peopleList, ';;;;;;;;');
  }

  closeModal() {
    this.activeModal.close();
  }

  editItem() {
    this.updateItem.emit(this.peopleContacts);
  }

}
