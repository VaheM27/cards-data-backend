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
  block = [
    {
      id: 0,
      num: 0,
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  delete(id: any) {
    this.block = this.block.filter((item: any) => item.id !== id);
  }

  setBlock() {
    const num = Math.ceil(Math.random() * 100000);
    const id = Math.ceil(Math.random() * 10);
    this.block.push({
      id: num,
      num: id,
    });
  }

  sortCard() {
    [
      ...this.block.sort((a, b) => {
        return a.num - b.num;
      }),
    ];
  };
}
