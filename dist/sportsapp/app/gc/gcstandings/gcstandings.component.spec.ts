import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcstandingsComponent } from './gcstandings.component';

describe('GcstandingsComponent', () => {
  let component: GcstandingsComponent;
  let fixture: ComponentFixture<GcstandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcstandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcstandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
