import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterIitComponent } from './inter-iit.component';

describe('InterIitComponent', () => {
  let component: InterIitComponent;
  let fixture: ComponentFixture<InterIitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterIitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterIitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
