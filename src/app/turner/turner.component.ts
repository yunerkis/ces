import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalTurnComponent } from '../modal-turn/modal-turn.component';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-turner',
  templateUrl: './turner.component.html',
  styleUrls: ['./turner.component.scss']
})
export class TurnerComponent implements OnInit {
  
  clientTurner: any = [];

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    private router: Router,

  ) { }

  ngOnInit(): void {

      this.clientService.clientTurner.subscribe(res => {
        this.clientTurner = res;
      });

      if (Object.keys(this.clientTurner).length  == 0) {
        this.router.navigate(['']);
    }
  }

  openDialog() {
    this.dialog.open(ModalTurnComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
