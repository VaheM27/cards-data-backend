import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data: any[] = [
    {
      name: 'Tatyana Brady',
      region: 'Friuli-Venezia Giulia',
      country: 'South Africa',
      numberrange: 0,
    },
    {
      name: 'Callie Gray',
      region: 'Atacama',
      country: 'Indonesia',
      numberrange: 1,
    },
    {
      name: 'Rhiannon Park',
      region: 'Innlandet',
      country: 'Mexico',
      numberrange: 1,
    },
    {
      name: 'Quail Velez',
      region: 'Western Cape',
      country: 'Mexico',
      numberrange: 3,
    },
    {
      name: 'Kasimir Mcbride',
      region: 'Brussels Hoofdstedelijk Gewest',
      country: 'Germany',
      numberrange: 6,
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  delete(id: any) {
    this.data = this.data.filter((item: any) => item.id !== id);
  }

  openDeleteModal() {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.delete.subscribe((res: any) => {
      this.delete(res.id);
    });
  }

  openEditModal() {
    this.modalService.open(EditModalComponent, { size: 'lg' });
  }
}
