import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnTennisComponent } from './lawn-tennis.component';

describe('LawnTennisComponent', () => {
  let component: LawnTennisComponent;
  let fixture: ComponentFixture<LawnTennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnTennisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawnTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
