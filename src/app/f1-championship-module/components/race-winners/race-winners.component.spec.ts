import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceWinnersComponent } from './race-winners.component';

describe('RaceWinnersComponent', () => {
  let component: RaceWinnersComponent;
  let fixture: ComponentFixture<RaceWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
