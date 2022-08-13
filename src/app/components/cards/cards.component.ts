import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  peopleContacts: any = [
    {
      id: uuidv4(),
      email: 'at.velit@hotmail.com',
      phone: '(383) 960-7566',
    },
    {
      id: uuidv4(),
      email: 'donec@google.net',
      phone: '(245) 430-7060',
    },
    {
      id: uuidv4(),
      email: 'maecenas.iaculis@yahoo.couk',
      phone: '1-343-279-5772',
    },
    {
      id: uuidv4(),
      email: 'amet.nulla@google.edu',
      phone: '(621) 538-5609',
    },
    {
      id: uuidv4(),
      email: 'nunc.ac.mattis@aol.org',
      phone: '1-723-358-4146',
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  delete(id: any) {
    this.peopleContacts = this.peopleContacts.filter(
      (item: any) => item.id !== id
    );
  }

  updateItem(item: any){

    let index = this.peopleContacts.indexOf(item);
    item.name = "Change Hardik";
    this.peopleContacts[index] = item;

    console.log(this.peopleContacts);
  }


  openDeleteModal(id: any) {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.peopleContacts.find(
      (el: any) => el.id === id
    );
    modalRef.componentInstance.delete.subscribe((id: any) => {
      this.delete(id);
    });
  }

  openEditModal(id: any) {
    const modalRef = this.modalService.open(EditModalComponent, { size: 'lg' });
    modalRef.componentInstance.peopleContacts = this.peopleContacts.find(
      (el: any) => el.id === id
    );
    modalRef.componentInstance.updateItem.subscribe((id: any) => {
      this.updateItem(id);
    });
  }
}
