import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTurnComponent } from './modal-turn.component';

describe('ModalTurnComponent', () => {
  let component: ModalTurnComponent;
  let fixture: ComponentFixture<ModalTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
