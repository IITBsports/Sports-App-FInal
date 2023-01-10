import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsInteriitComponent } from './pts-interiit.component';

describe('PtsInteriitComponent', () => {
  let component: PtsInteriitComponent;
  let fixture: ComponentFixture<PtsInteriitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsInteriitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsInteriitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
