import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  // public farmList: FormArray;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    // this.form = this.fb.group({
    // 	name: [null],
    // 	region: [null],
    // 	country: [null],
    // 	numberrange: [null],
    // });
    // this.farmList = this.form.get('farms') as FormArray;
  }

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close();
  }
}
