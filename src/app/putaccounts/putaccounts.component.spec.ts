import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutaccountsComponent } from './putaccounts.component';

describe('PutaccountsComponent', () => {
  let component: PutaccountsComponent;
  let fixture: ComponentFixture<PutaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
