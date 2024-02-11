import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutschoolComponent } from './putschool.component';

describe('PutschoolComponent', () => {
  let component: PutschoolComponent;
  let fixture: ComponentFixture<PutschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
