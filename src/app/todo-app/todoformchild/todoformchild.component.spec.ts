import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformchildComponent } from './todoformchild.component';

describe('TodoformchildComponent', () => {
  let component: TodoformchildComponent;
  let fixture: ComponentFixture<TodoformchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
