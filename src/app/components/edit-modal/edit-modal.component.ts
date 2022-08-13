import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  // public farmList: FormArray;
  @Input() peopleList:any;

  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder,) {
    // super();
    // this.form = this.fb.group({
    // 	name: [null],
    // 	region: [null],
    // 	country: [null],
    // 	numberrange: [null],
    // });
    // this.farmList = this.form.get('farms') as FormArray;
  }

  ngOnInit(): void {
    console.log(this.peopleList,';;;;;;;;');

  }

  closeModal() {
    this.activeModal.close();
  }

  // getFarmFormGroup(index: number): FormGroup {
	// 	// const formGroup = this.farmList.controls[index] as FormGroup;
	// 	// return formGroup;
	// }

  createFarm(): FormGroup {
		return this.fb.group({
    	name: [null],
    	region: [null],
    	country: [null],
    	numberrange: [null],
		});
	}
}
