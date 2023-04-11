import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-modal-turn',
  templateUrl: './modal-turn.component.html',
  styleUrls: ['./modal-turn.component.scss']
})
export class ModalTurnComponent implements OnInit {
  
  clientTurner: any = [];

  constructor(
    private clientService: ClientService,

  ) { }

  ngOnInit(){

    this.clientService.clientTurner.subscribe(res => {
      this.clientTurner = res;
    });
  }

}
