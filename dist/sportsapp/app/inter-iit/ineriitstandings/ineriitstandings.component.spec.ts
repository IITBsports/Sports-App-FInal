import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneriitstandingsComponent } from './ineriitstandings.component';

describe('IneriitstandingsComponent', () => {
  let component: IneriitstandingsComponent;
  let fixture: ComponentFixture<IneriitstandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IneriitstandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IneriitstandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
