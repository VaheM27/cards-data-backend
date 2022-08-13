import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  peopleList: any[] = [
    {
      id: uuidv4(),
      name: 'Tatyana Brady',
      region: 'Friuli-Venezia Giulia',
      country: 'South Africa',
      numberrange: 0,
    },
    {
      id: uuidv4(),
      name: 'Callie Gray',
      region: 'Atacama',
      country: 'Indonesia',
      numberrange: 1,
    },
    {
      id: uuidv4(),
      name: 'Rhiannon Park',
      region: 'Innlandet',
      country: 'Mexico',
      numberrange: 1,
    },
    {
      id: uuidv4(),
      name: 'Quail Velez',
      region: 'Western Cape',
      country: 'Mexico',
      numberrange: 3,
    },
    {
      id: uuidv4(),
      name: 'Kasimir Mcbride',
      region: 'Brussels Hoofdstedelijk Gewest',
      country: 'Germany',
      numberrange: 6,
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  delete(id: any) {
    this.peopleList = this.peopleList.filter((item: any) => item.id !== id);
  }

  openDeleteModal(id: any) {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.peopleList.find(
      (el: any) => el.id === id
    );
    modalRef.componentInstance.delete.subscribe((id: any) => {
      this.delete(id);
    });
  }

  openEditModal(item: any) {
    const modalRef = this.modalService.open(EditModalComponent, { size: 'lg' });
    modalRef.componentInstance.peopleList = this.peopleList;
  }
}
