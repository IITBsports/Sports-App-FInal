import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsComponent } from './pts.component';

describe('PtsComponent', () => {
  let component: PtsComponent;
  let fixture: ComponentFixture<PtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
