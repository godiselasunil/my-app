import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytaskComponent } from './displaytask.component';

describe('DisplaytaskComponent', () => {
  let component: DisplaytaskComponent;
  let fixture: ComponentFixture<DisplaytaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
