import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiComponent } from './upi.component';

describe('UpiComponent', () => {
  let component: UpiComponent;
  let fixture: ComponentFixture<UpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
