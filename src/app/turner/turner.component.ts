import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalTurnComponent } from '../modal-turn/modal-turn.component';

@Component({
  selector: 'app-turner',
  templateUrl: './turner.component.html',
  styleUrls: ['./turner.component.scss']
})
export class TurnerComponent implements OnInit {
  

  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalTurnComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
