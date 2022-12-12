import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticsComponent } from './aquatics.component';

describe('AquaticsComponent', () => {
  let component: AquaticsComponent;
  let fixture: ComponentFixture<AquaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
