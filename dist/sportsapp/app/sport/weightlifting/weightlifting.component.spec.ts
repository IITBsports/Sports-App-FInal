import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightliftingComponent } from './weightlifting.component';

describe('WeightliftingComponent', () => {
  let component: WeightliftingComponent;
  let fixture: ComponentFixture<WeightliftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightliftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightliftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
