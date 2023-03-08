import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-turn',
  templateUrl: './modal-turn.component.html',
  styleUrls: ['./modal-turn.component.scss']
})
export class ModalTurnComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
