import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquashComponent } from './squash.component';

describe('SquashComponent', () => {
  let component: SquashComponent;
  let fixture: ComponentFixture<SquashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
