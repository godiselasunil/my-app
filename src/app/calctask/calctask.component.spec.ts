import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalctaskComponent } from './calctask.component';

describe('CalctaskComponent', () => {
  let component: CalctaskComponent;
  let fixture: ComponentFixture<CalctaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalctaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalctaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
