import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnerComponent } from './turner.component';

describe('TurnerComponent', () => {
  let component: TurnerComponent;
  let fixture: ComponentFixture<TurnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
